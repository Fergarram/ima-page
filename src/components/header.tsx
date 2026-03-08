import { Logo } from "@/components/logo";
import { ScrollOverlay } from "@/components/scroll-overlay";

export function Header() {
	return (
		<header class="flex flex-col md:items-center gap-6 w-full max-w-article mx-auto px-5">
			<Logo />
			<nav class="flex overflow-auto w-full md:w-fit hide-scrollbars relative">
				<ul class="flex gap-8 uppercase">
					<li>
						<a href="/">README</a>
					</li>
					<li>
						<a href="/examples">Examples</a>
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
			<div class="border-b border-line w-full"></div>
		</header>
	);
}
