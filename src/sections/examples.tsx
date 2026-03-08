import { CodeSnippet } from "@/components/code-snippet";
import { EmbedPreview } from "@/components/embed-preview";
import { Tabs } from "@/components/tabs";

const res = await fetch(
	"https://raw.githubusercontent.com/Fergarram/ima-page/refs/heads/main/src/components/tabs.tsx",
);
const ima_page_src = await res.text();

const code_snippet = await CodeSnippet({
	language: "tsx",
	content: ima_page_src,
});

export default function () {
	return (
		<>
			<h2 id="examples">EXAMPLES</h2>
			<ol class="text-fg-soft">
				<li>
					<a href="#static-website">Static website</a>
				</li>
				<li>
					<a href="#clicker-game">Clicker game</a>
				</li>
				<li>
					<a href="#infinite-canvas">Infinite canvas</a>
				</li>
				<li>
					<a href="#game-engine">Game engine</a>
				</li>
				<li>
					<a href="#map-app">Map app</a>
				</li>
			</ol>
			<h3 id="static-website">STATIC WEBSITE</h3>
			<p>
				This very website is built using Ima. It uses Bun to scan TSX files,
				renders them to static HTML at build time, and automatically injects
				client-side JavaScript for any components marked with "hydrate" like how
				Next.js has the "use client" directive.
			</p>
			<p>
				Although this is not a highly-interactive page, Ima still makes it feel
				simpler and easier to compose static interfaces.
			</p>
			<p>
				You can look at the full source code on GitHub at{" "}
				<a
					href="https://github.com/fergarram/ima-page"
					target="_blank"
					rel="noopener noreferrer"
				>
					https://github.com/fergarram/ima-page
				</a>
				, but here is an example of a client component:
			</p>
			<Tabs
				active="main"
				// class="max-w-5xl!"
				items={[
					{
						name: "main",
						label: "main.tsx",
						class: "h-128", // "h-[80dvh]",
						content: code_snippet,
					},
				]}
			/>
			<h3 id="clicker-game">CLICKER GAME</h3>
			<p>
				I made a clicker game called "How the fuck will I pay this". It's an
				incremental about paying debt. You can inspect the code and play with
				it.
			</p>
			<p>BTW, the preview below is an iframe.</p>
			<EmbedPreview
				src="https://fernando.computer/games/how-the-fuck-will-i-pay-this"
				title="How the fuck will I pay this"
				editor_url="https://fernando.computer/games/how-the-fuck-will-i-pay-this/?clone-editor=true"
			/>
			<p>
				This game was made in a weekend. It uses vanilla JS instead of JSX. It
				also uses my{" "}
				<a
					href="https://github.com/Fergarram/om/blob/236646ee732e21e83e58712e2b7cb07405037723/system/modules/client/%40std/blob-loader.js"
					target="_blank"
					rel="noopener noreferrer"
				>
					blob-loader.js
				</a>{" "}
				library to make the game self-contained and bundler-free.
			</p>
			<h3 id="infinite-canvas">INFINITE CANVAS</h3>
			<EmbedPreview
				src="https://vps.fernando.computer/desktop"
				title="Infinite Canvas"
				editor_url="https://vps.fernando.computer/desktop?clone-editor=true"
			/>
			{/*<h3 id="game-engine">GAME ENGINE</h3>
			<p>A game engine built with Ima.js.</p>*/}
		</>
	);
}
