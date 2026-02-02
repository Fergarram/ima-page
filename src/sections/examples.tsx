export default function () {
	return (
		<>
			<h2 id="examples">EXAMPLES</h2>
			<ol class="list-decimal pl-6 text-fg-soft">
				<li>
					<a href="#static-website">Static website</a>
				</li>
				<li>
					<a href="#clicker-game">Clicker game</a>
				</li>
				<li>
					<a href="#infinite-canvas">Infinite canvas</a>
				</li>
				{/*<li>
					<a href="#game-engine">Game engine</a>
				</li>*/}
				{/*<li>
					<a disabled class="pointer-events-none">
						Map app (example comming soon)
					</a>
				</li>*/}
			</ol>
			<h3 id="static-website">STATIC WEBSITE</h3>
			<p>
				This very website is built using Ima. It uses Bun to scan TSX files, renders them to
				static HTML at build time, and automatically injects client-side JavaScript for any
				components marked with "hydrate" like how Next.js has the "use client" directive.
			</p>
			<p>
				Although this is not a highly-interactive page, Ima still makes it feel simpler and
				easier to compose static interfaces.
			</p>
			<p>
				You can look at the source code on GitHub at{" "}
				<a href="https://github.com/fergarram/ima-page">
					https://github.com/fergarram/ima-page
				</a>
				.
			</p>
			<h3 id="clicker-game">CLICKER GAME</h3>I made a clicker game called "How the fuck will I
			pay this". It's an incremental about paying debt. You can inspect the code and play with
			it.
			<figure>
				<iframe
					src="https://howthefuckwillipaythis.netlify.app"
					class="w-full aspect-video overflow-hidden rounded-2"
				></iframe>
				<figcaption class="border-t border-line h-7 flex items-center justify-between">
					<a
						class="underline"
						href="https://howthefuckwillipaythis.netlify.app"
						target="_blank"
						rel="noopener noreferrer"
					>
						How the fuck will I pay this
					</a>
					<a
						href="https://howthefuckwillipaythis.netlify.app/?clone-editor=true"
						class="flex items-center gap-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open in editor{" "}
						<svg
							class="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M18 13v6H5V8h6" />
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					</a>
				</figcaption>
			</figure>
			<p>
				This game was made in a weekend. It uses vanilla JS instead of JSX. It also uses my{" "}
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
			<iframe src="https://vps.fernando.computer/desktop" class="w-full aspect-video"></iframe>
			{/*<h3 id="game-engine">GAME ENGINE</h3>
			<p>A game engine built with Ima.js.</p>*/}
		</>
	);
}
