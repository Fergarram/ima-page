import tailwind_plugin from "bun-plugin-tailwind";
import { readdir, mkdir, writeFile, cp, rm, readFile } from "node:fs/promises";
import { join, relative, dirname } from "node:path";
import { Dirent, watch } from "node:fs";

//
// Constants
//

const PAGES_DIR = join(import.meta.dir, "src/pages");
const COMPONENTS_DIR = join(import.meta.dir, "src/components");
const PUBLIC_DIR = join(import.meta.dir, "public");
const DIST_DIR = join(import.meta.dir, "dist");
const PORT = 4040;
const IS_DEV = process.argv.includes("--dev");

//
// State
//

let client_script_paths: string[] = [];

//
// Functions
//

async function getPageFiles(dir: string): Promise<string[]> {
	const entries = await readdir(dir, { withFileTypes: true, recursive: true });
	const files: string[] = [];

	for (const entry of entries) {
		if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name)) {
			files.push(join(entry.parentPath, entry.name));
		}
	}

	return files;
}

async function getClientComponents(dir: string): Promise<string[]> {
	let entries: Dirent[] = [];
	try {
		entries = await readdir(dir, { withFileTypes: true, recursive: true });
	} catch (error) {
		return [];
	}

	const client_components: string[] = [];

	for (const entry of entries) {
		if (!entry.isFile() || !/\.(ts|tsx)$/.test(entry.name)) {
			continue;
		}

		const file_path = join(entry.parentPath, entry.name);
		const content = await readFile(file_path, "utf-8");
		const first_line = content.trimStart().split("\n")[0];

		if (
			first_line === '"hydrate";' ||
			first_line === "'hydrate';" ||
			first_line === "`hydrate`;" ||
			first_line === '"hydrate"' ||
			first_line === "'hydrate'" ||
			first_line === "`hydrate`"
		) {
			client_components.push(file_path);
		}
	}

	return client_components;
}

async function buildClientComponents(): Promise<void> {
	const client_entrypoints = await getClientComponents(COMPONENTS_DIR);

	if (client_entrypoints.length === 0) {
		console.log("No client components found");
		client_script_paths = [];
		return;
	}

	const result = await Bun.build({
		entrypoints: client_entrypoints,
		outdir: join(DIST_DIR, "components"),
		plugins: [tailwind_plugin],
		splitting: true,
		target: "browser",
		minify: !IS_DEV,
	});

	if (!result.success) {
		console.error("Client component build failed:");
		for (const log of result.logs) {
			console.error(log);
		}
		client_script_paths = [];
		return;
	}

	// Collect entry point paths relative to dist for script tag injection
	client_script_paths = result.outputs
		.filter((output) => output.kind === "entry-point")
		.map((output) => `/${relative(DIST_DIR, output.path)}`);

	console.log(
		`Built ${client_entrypoints.length} client component(s) with splitting`,
	);
}

function generateScriptTags(): string {
	if (client_script_paths.length === 0) {
		return "";
	}

	return client_script_paths
		.map((path) => `<script type="module" defer src="${path}"></script>`)
		.join("\n\t\t");
}

function injectScripts(html: string): string {
	const script_tags = generateScriptTags();

	if (!script_tags) {
		return html;
	}

	// Insert script tags before closing </body> tag
	return html.replace("</body>", `\t${script_tags}\n\t</body>`);
}

function getOutputPath(file_path: string): string {
	const relative_path = relative(PAGES_DIR, file_path);
	const without_ext = relative_path.replace(/\.(ts|tsx)$/, "");

	// If it's already an index file, just swap extension
	if (without_ext.endsWith("/index") || without_ext === "index") {
		return join(DIST_DIR, without_ext + ".html");
	}

	// Otherwise, make it a directory with index.html
	return join(DIST_DIR, without_ext, "index.html");
}

async function buildPage(file_path: string): Promise<void> {
	const module = await import(file_path);
	const render = module.default;

	if (typeof render !== "function") {
		console.log(`Skipping ${file_path}: no default export function`);
		return;
	}

	let html = render();
	html = injectScripts(html);

	const output_path = getOutputPath(file_path);
	const output_dir = dirname(output_path);

	await mkdir(output_dir, { recursive: true });
	await writeFile(output_path, html, "utf-8");

	console.log(`Built: ${relative(DIST_DIR, output_path)}`);
}

async function copyPublicFiles(): Promise<void> {
	try {
		await cp(PUBLIC_DIR, DIST_DIR, { recursive: true });
		console.log("Copied public files to dist");
	} catch (_) {
		// Public directory might not exist, skip silently
	}
}

async function cleanDist(): Promise<void> {
	try {
		await rm(DIST_DIR, { recursive: true, force: true });
		console.log("Cleaned dist directory");
	} catch (_) {
		// Dist might not exist, skip silently
	}
}

async function buildAll(): Promise<void> {
	await cleanDist();
	await copyPublicFiles();

	await buildCSS();
	await buildClientComponents();

	const page_files = await getPageFiles(PAGES_DIR);

	for (const file of page_files) {
		await buildPage(file);
	}

	console.log(`Done. Built ${page_files.length} page(s).`);
}

function startServer(): void {
	Bun.serve({
		port: PORT,
		async fetch(req) {
			const url = new URL(req.url);
			let path = url.pathname;

			if (path.endsWith("/")) {
				path += "index.html";
			} else if (!path.includes(".")) {
				path += "/index.html";
			}

			const file_path = join(DIST_DIR, path);
			const file = Bun.file(file_path);

			if (await file.exists()) {
				return new Response(file);
			}

			return new Response("Not Found", { status: 404 });
		},
	});

	console.log(`Server running at http://localhost:${PORT}`);
}

function startPublicWatcher(): void {
	let debounce_timer: Timer | null = null;

	watch(PUBLIC_DIR, { recursive: true }, (_, filename) => {
		if (debounce_timer) clearTimeout(debounce_timer);

		debounce_timer = setTimeout(async () => {
			console.log(`\nPublic file changed: ${filename}`);
			await copyPublicFiles();
		}, 50);
	});

	console.log(`Watching public directory for changes...\n`);
}

function startCSSWatcher(): void {
	let debounce_timer: Timer | null = null;
	const css_file = join(import.meta.dir, "src/global.css");

	watch(css_file, (_) => {
		if (debounce_timer) clearTimeout(debounce_timer);

		debounce_timer = setTimeout(async () => {
			console.log(`\nCSS changed, rebuilding...`);
			await buildCSS();
		}, 50);
	});

	console.log(`Watching global.css for changes...`);
}

async function buildCSS(): Promise<void> {
	const css_entrypoint = join(import.meta.dir, "src/global.css");

	const result = await Bun.build({
		entrypoints: [css_entrypoint],
		outdir: DIST_DIR,
		plugins: [tailwind_plugin],
		minify: !IS_DEV,
	});

	if (!result.success) {
		console.error("CSS build failed:");
		for (const log of result.logs) {
			console.error(log);
		}
		return;
	}

	console.log("Built CSS");
}

//
// Code execution
//

await buildAll();

if (IS_DEV) {
	startServer();
	startPublicWatcher();
	startCSSWatcher();
}
