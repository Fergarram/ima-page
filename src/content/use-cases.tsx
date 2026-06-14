// import { CodeSnippet } from "@/components/code-snippet";
// import { EmbedPreview } from "@/components/embed-preview";
// import { Tabs } from "@/components/tabs";

// const res = await fetch(
// 	"https://raw.githubusercontent.com/Fergarram/ima-page/refs/heads/main/src/components/tabs.tsx",
// );
// const ima_page_src = await res.text();

// const code_snippet = await CodeSnippet({
// 	language: "tsx",
// 	content: ima_page_src,
// });

export default function () {
	return (
		<>
			<h1>
				USE CASES
				<br />
				<span class="opacity-20" aria-hidden="true">
					=========
				</span>
			</h1>
			<p>
				There are a few examples I want to show case that really point to the
				benefits and versatility of Ima.
			</p>
			<ol class="text-fg-soft">
				<li>
					<a href="#canvas-apps"> Canvas apps (per-frame interactivity)</a>
				</li>
				<li>
					<a href="hydration">Island hydration</a>
				</li>
				<li>
					<a href="#ssg">Static site generation</a>
				</li>
				<li>
					<a href="#ssr">Server side rendering</a>
				</li>
				<li>
					<a href="#service-workers">Service worker rendering</a>
				</li>
			</ol>
			<h2 id="canvas-apps">
				Canvas apps
				<br />
				<span class="opacity-20" aria-hidden="true">
					===========
				</span>
			</h2>
			<p>
				Ima was born out of the frustration I had with{" "}
				<a href="https://vanjs.org/" target="_blank" rel="noopener noreferrer">
					van.js
				</a>{" "}
				when I was working on{" "}
				<a
					href="https://www.lamerider.app/"
					target="_blank"
					rel="noopener noreferrer"
				>
					Lamerider
				</a>{" "}
				for a game jam. I made the game using my custom game engine, which is
				just a wrapper around the 2D canvas API. I needed a UI layer for the
				game and went with VanJS. Syncing the game state with van.state() was
				very unreliable: elements would not react to state changes
				unpredictably.
			</p>
			<p>
				At that time I didn't have ima, I only had Swan - the predecessor to
				ima. So I switched to it instead and manually added event listeners
				where needed.
			</p>
			<p>TODO: Example that uses threejs or something else</p>
			<h2 id="hydration">
				Island hydration
				<br />
				<span class="opacity-20" aria-hidden="true">
					================
				</span>
			</h2>
			<p>
				With Ima, components are fully replaced rather than reconciled.
				Hydration mismatches are impossible. Once the new element is in the DOM,
				its reactive callbacks are automatically picked up by the global frame
				loop with no mounting step or subscription wiring. Cleanup is also
				automatic: when an element is removed from the DOM, its callbacks are
				detected as disconnected and garbage collected.
			</p>
			<p>
				When you mix this with Ima's static tag rendering, you get a powerful
				tool for building HTML-based interfaces, whether rendering from server,
				client, files or workers.
			</p>

			<h2 id="ssg">
				Static site generation
				<br />
				<span class="opacity-20" aria-hidden="true">
					======================
				</span>
			</h2>
			<p>TODO: Explain a bit and mention this site</p>

			<h2 id="ssr">
				Server side rendering
				<br />
				<span class="opacity-20" aria-hidden="true">
					=====================
				</span>
			</h2>
			<p>TODO: Explain a bit and mention Molar</p>

			<h2 id="service-workers">
				Service worker rendering
				<br />
				<span class="opacity-20" aria-hidden="true">
					========================
				</span>
			</h2>
			<p> TODO: Explain in more depth and showcase app (maybe Shoaib's one)</p>
		</>
	);
}
