import { SlideLayout } from "@/components/slide-layout";
import { CodeSnippet } from "@/components/code-snippet";

const hydrate_example = await CodeSnippet({
	language: "tsx",
	show_line_numbers: false,
	content: `"hydrate";

//
// Client-side hydration
//

if (typeof window !== "undefined") {
    const components = document.querySelectorAll(
        "[component='clicks-example']"
    );
    for (const component of components) {
        component.replaceWith(<ClicksExample />);
    }
}

//
// Component
//

export function ClicksExample() {
    let clicks = 0;
    return (
        <div component="clicks-example">
            <button onclick={() => clicks++}>
                {() => \`\${clicks} clicks\`}
            </button>
        </div>
    );
}`,
});

const build_scan = await CodeSnippet({
	language: "ts",
	show_line_numbers: false,
	content: `// build.ts scans for "hydrate" directive
async function getClientComponents(dir) {
    const entries = await readdir(dir, { recursive: true });
    const client_components = [];

    for (const entry of entries) {
        const content = await readFile(file_path, "utf-8");
        const first_line = content.trimStart().split("\\n")[0];

        if (first_line === '"hydrate";') {
            client_components.push(file_path);
        }
    }
    return client_components;
}

// These get bundled separately for the browser
const result = await Bun.build({
    entrypoints: client_entrypoints,
    target: "browser",
    splitting: true,
});`,
});

export default function () {
	return (
		<SlideLayout title="Island Hydration" slide_number={5} total_slides={8}>
			<h1 class="text-xl">ISLAND HYDRATION</h1>
			<p>
				Components with the "hydrate" directive get bundled as client JS. On
				page load, they find their server-rendered placeholder and replace it
				with a live interactive version.
			</p>
			<div class="grid grid-cols-2 gap-4">
				<div class="border border-line bg-surface-code overflow-auto max-h-96">
					{hydrate_example}
				</div>
				<div class="border border-line bg-surface-code overflow-auto max-h-96">
					{build_scan}
				</div>
			</div>
		</SlideLayout>
	);
}
