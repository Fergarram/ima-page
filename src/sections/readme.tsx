import { ClicksExample } from "@/components/clicks-example";
import { CodeSnippet } from "@/components/code-snippet";
import { Tabs } from "@/components/tabs";

const download_instructions = [
	{
		name: "manual",
		label: "Manual Download",
		content: await CodeSnippet({
			language: "bash",
			show_line_numbers: false,
			content: `# Single file download
curl https://github.com/Fergarram/ima/raw/refs/heads/main/ima.js > ima.js

# NPM
bun add @fergarram/ima`,
		}),
	},
	{
		name: "cdn",
		label: "External CDN",
		content: await CodeSnippet({
			language: "html",
			show_line_numbers: false,
			content: `<!-- ESM script tag -->
<script type="module" src="https://esm.sh/@fergarram/ima"></script>`,
		}),
	},
];

const sandbox = [
	{
		name: "jsx",
		label: "JSX",
		content: await CodeSnippet({
			language: "js",
			content: `let count = 0;

const main_el = <main>
	<button onclick={() => count++}>
		{() => \`\${count} clicks\`}
	</button>
</main>;

document.body.appendChild(main_el);
`,
		}),
	},
	{
		name: "js",
		label: "JS",
		content: await CodeSnippet({
			language: "js",
			content: `import { useTags } from "ima";
const { main, button } = useTags();

let count = 0;

const main_el = main(
	button(
		{
			onclick: () => count++
		},
		() => \`\${count} clicks\`,
	),
);

document.body.appendChild(main_el);
`,
		}),
	},
];

export default function () {
	return (
		<>
			<h1 class="md:text-center">
				A lightweight immediate-mode inspired UI rendering library for the web.
			</h1>
			<div class="w-full grid">
				<Tabs active="jsx" items={sandbox} />
				<ClicksExample />
			</div>
			<p>
				Meaning "now" in Japanese, Ima is written in ~555 lines of JavaScript,
				it makes it easy to compose DOM-based reactive UIs without special state
				management nonsense.
			</p>
			<p>
				It runs in any major JavaScript runtime and can be easily extended to
				use alternative rendering backends.
			</p>
			<p>
				You can download it as a single JS file or import it as an NPM package.
			</p>
			<Tabs active="manual" items={download_instructions} />
			<h2>WHY IMA EXISTS</h2>
			<p>
				If you’ve ever done a less conventional type of websites like
				interactive visualizations, games, canvas-based editors, maps or
				anything that requires careful consideration of performance, you
				probably know how painful it is to sync your app state with existing UI
				frameworks systems. Systems like those of react, vue, etc.
			</p>
			<p>
				Your interactive thing is already complex enough. The last thing you
				want is having to add a whole layer of state management hell just to
				render some divs and buttons on top.
			</p>
			<p>
				We can do better. As a matter of fact, people are already doing better
				UI systems, they're called{" "}
				<a
					href="https://en.wikipedia.org/wiki/Immediate_mode_(computer_graphics)#Immediate_mode_GUI"
					rel="noopener noreferrer"
					target="_blank"
				>
					immediate-mode GUIs
				</a>
				.
			</p>
			<p>
				How we can apply it to web dev is very simple. Structure your state
				however works best for your application. Then, each frame, recreate your
				interface based on the current state. Your UI components can read this
				data and modify it directly in response to events like mouse clicks.
			</p>
			<p>
				Because this happens each frame, you don’t have a lifecycle to manage,
				or use the right getter to make sure your data is not stale. No, you
				simply read whatever data you need each frame and render it.
			</p>
			<p>That’s it. So, how can we make UI frameworks be like this?</p>
			<p>Ima is one answer to this question.</p>
			<p>
				Take a look at some <a href="/examples">examples</a>, and tell me —
				doesn't it feel good to not deal with state management?
			</p>
		</>
	);
}
