import { Logo } from "@/components/logo";
import { ScrollOverlay } from "@/components/scroll-overlay";
import Examples from "@/sections/examples";
import Readme from "@/sections/readme";

export default function () {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Ima — An immediate-mode inspired UI rendering library</title>
				<link rel="stylesheet" href="/styles.css" />
			</head>
			<body>
				<main class="mx-auto mt-6 md:mt-30 px-5 md:px-0 max-w-article flex flex-col gap-6">
					<header class="flex flex-col md:items-center gap-6 pb-6 border-b border-line w-full">
						<Logo />
						<nav class="flex overflow-auto w-full md:w-fit hide-scrollbars relative">
							<ul class="flex gap-8 uppercase">
								<li>
									<a href="/">README</a>
								</li>
								<li>
									<a href="#examples">Examples</a>
								</li>
								<li>
									<a href="#source">Source</a>
								</li>
								<li>
									<a href="#tools">Tools</a>
								</li>
								<li>
									<a href="#devlog">Devlog</a>
								</li>
							</ul>
							<ScrollOverlay class="md:hidden" />
						</nav>
					</header>
					<article class="flex flex-col gap-6">
						<Readme />
						<hr />
						<Examples />
					</article>
					<footer class="flex flex-col items-center gap-2 py-8">
						<p>
							Copyright © {new Date().getFullYear()}{" "}
							<a href="https://fernando.works/" rel="noopener noreferrer" target="_blank">
								Fernando Garcia
							</a>
						</p>
					</footer>
				</main>
			</body>
		</html>
	);
}
