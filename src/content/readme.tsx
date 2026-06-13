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
			content: `# JavaScript ES Module
curl https://fernando.computer/system/modules/ima.js > ima.js

# TypeScript ES Module
curl https://fernando.computer/system/modules/ima.ts > ima.ts

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
				An immediate-mode inspired UI rendering library for the web.
			</h1>
			<div class="w-full grid">
				<Tabs active="jsx" items={sandbox} />
				<ClicksExample />
			</div>
			<p>
				Meaning "now" in Japanese, Ima is written in{" "}
				<a href="/source">~555 lines of TypeScript</a>, it makes it easy to
				compose DOM-based reactive UIs without special state management
				nonsense.
			</p>
			<p>
				It runs in any major JavaScript runtime and provides two main rendering
				outputs: html strings and regular DOM elements.
			</p>
			<p>
				You can download it as a single TypeScript or JavaScript file or import
				it as an NPM package.
			</p>
			<Tabs active="manual" items={download_instructions} />
			<h2>WHY IMA EXISTS</h2>
			<p>
				First of all, if you don't work with JavaScript, this is not for you.
			</p>
			<p>
				If you’ve ever done a less conventional type of website like interactive
				visualizations, games, canvas-based editors, maps or anything that
				requires careful consideration of performance, but you can't escape
				using JavaScript, you probably know how painful it is to sync your app
				state with existing UI framework systems.
			</p>
			<p>
				Your interactive thing is already complex enough. The last thing you
				want is having to add (and learn) a whole layer of state management hell
				just to render some divs and buttons on top.
			</p>
			<p>
				We can do better. As a matter of fact, people in other industries are
				already doing better UI systems using an{" "}
				<a
					href="https://en.wikipedia.org/wiki/Immediate_mode_(computer_graphics)#Immediate_mode_GUI"
					rel="noopener noreferrer"
					target="_blank"
				>
					immediate-mode
				</a>{" "}
				approach.
			</p>
			<p>
				Sadly for us JavaScript enjoyers, we can't change the retained-mode
				nature of the DOM. But we can take some inspiration from immediate-mode
				style APIs.
			</p>
			<h2>IMMEDIATE-MODE REACTIVITY</h2>
			<p>
				The main issue with existing systems is the amount of abstraction layers
				required just to get reactivity working.
			</p>
			<p>
				You have to learn a custom API to do what should be a simple variable
				assignment or look up. It gets worse when you deal with objects, where
				you end up jumping through hoops to update/read nested state.
			</p>
			<p>
				With Ima, there is no state management API you need to follow. Structure
				your state however works best for your application. Then, if you need
				your UI to show the most up-to-date value of your state, pass a callback
				that will run each frame and read from your state.
			</p>
			<p>
				Because this happens each frame, you don’t have a lifecycle to manage,
				or use the right getter to make sure your data is not stale. No, you
				simply read whatever data you need each frame and render it.
			</p>
			<p>That’s it. So, how can we make UI frameworks be like this?</p>
			<p>Ima is one answer to this question.</p>
			<p>
				Take a look at some <a href="/use-cases">use cases</a>, and tell me —
				doesn't it feel good to not deal with state management?
			</p>
			<h2>ROADMAP TO V1</h2>
			<p>
				It currently sits at 0.9.0, I have been battle testing it for some time
				now and there are 4 things I'm not happy with:
			</p>
			<ul>
				<li>- JSX factory implementation</li>
				<li>- The callback garbage collector</li>
				<li>- Attribute truthy values</li>
				<li>- class vs className</li>
			</ul>

			<p>
				The JSX implementation has one big issue. It doesn't support SVG
				elements. I also don't love how it's handled by the external `ima-tsx`
				module - I don't even think such module should exist.
			</p>
			<p>
				And the garbage collector, aside from the fact that it shouldn't exist,
				it currently checks for disconnected nodes every second or so and
				removes callbacks.
			</p>
			<p>
				I think first two will get fixed by a core change: doing parent first,
				children second declaration order.
			</p>
			<p>
				When we do `div(p(),Component())` the args resolve first and the parent
				last. If we ran the parent code first, and the children after, we could
				easily make all children of SVG element to be created with the NS
				element creation funciton. And for the garbage collector, we could keep
				reference of attached callbacks (potentially, would have to test).
			</p>
			<p>
				There is an advantage I'm aware of if we do child first, parent last - it's less callbacks so it's faster. But another potential huge win would be we finally get a way to deal with nested reactive callbacks: at the very least we could detect them and throw a warning.
			</p>
			<p>
				The remaining two issues are design problems. The attribute one has a
				solution - we just follow what react does there. But for the class one,
				I love how it feels to just say class="..." but it's not great when
				destructuring props. Potential solution: allow both but in JSX we always
				resolve to className for props destructuring.
			</p>
			<p>
				I think solving those issues would make it as close as I can think of to
				version 1.0.0.
			</p>
		</>
	);
}
