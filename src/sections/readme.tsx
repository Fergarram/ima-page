import { CodeSnippet } from "@/components/code-snippet";
import { Sandbox } from "@/components/sandbox";
import { Tabs } from "@/components/tabs";

const download_instructions = [
	{
		name: "manual",
		label: "Manual Download",
		content: await CodeSnippet({
			language: "bash",
			content: `# Single file download
curl https://github.com/Fergarram/ima/raw/refs/heads/main/ima.js > ima.js

# NPM
bun add @fergarram/ima
`,
		}),
	},
	{
		name: "cdn",
		label: "External CDN",
		content: await CodeSnippet({
			language: "html",
			content: `<!-- ESM script tag -->
<script type="module" src="https://esm.sh/@fergarram/ima"></script>`,
		}),
	},
];

export default function () {
	return (
		<>
			<h1 class="md:text-center md:max-w-3/4 md:mx-auto">
				A lightweight and fast immediate-mode inspired UI rendering library for the web.
			</h1>
			<Sandbox id="first-demo" />
			<p>
				Meaning "now" in Japanese, Ima is written in ~700 lines of JavaScript, it makes it easy
				to compose DOM-based reactive UIs without special state management nonsense.
			</p>
			<p>
				It runs in any major JavaScript runtime and can be easily extended to use alternative
				rendering backends.
			</p>
			<p>You can download it as a single JS file or import it as an NPM package.</p>
			<Tabs active="manual" items={download_instructions} />
			<h2>WHY IMA EXISTS</h2>
			<p>
				If you’ve ever done a less conventional type of websites like interactive
				visualizations, games, canvas-based editors, maps or anything that requires careful
				consideration of performance, you probably know how painful it is to sync your app state
				with existing UI frameworks state management systems. Systems like those of react, vue,
				etc.
			</p>
			<p>
				Your interactive thing is already complex enough. The last thing you want is having to
				add a whole layer of state management hell just to render some divs and buttons on top.
			</p>
			<p>
				We can do better. As a matter of fact, people are already doing better, and it’s called{" "}
				<a
					href="https://en.wikipedia.org/wiki/Immediate_mode_(computer_graphics)#Immediate_mode_GUI"
					rel="noopener noreferrer"
					target="_blank"
				>
					immediate-mode GUI
				</a>
				.
			</p>
			<p>
				How we can apply it is very simple. Structure your state however works best for your
				application. Then, each frame, render your interface based on the current state. Your UI
				components can read this data and modify it directly in response to events like mouse
				clicks.
			</p>
			<p>
				Because this happens each frame, you don’t have a lifecycle to manage, or use the right
				getter to make sure your data is not stale. No, you simply read whatever data you need
				each frame and render it.
			</p>
			<p>That’s it. So, how can we make UI frameworks be like this?</p>
			<p>
				Ima is one answer to this question. It’s a solution to the problems mentioned above. A
				solution that doesn’t have to sacrifice performance for developer ergonomics.
			</p>
			<p>
				Take a look at some examples, and tell me — doesn’t it feel good to not deal with state
				management management?
			</p>
		</>
	);
}
