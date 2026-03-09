import { SlideLayout } from "@/components/slide-layout";

export default function () {
	return (
		<SlideLayout title="Pros, Cons, Todos" slide_number={7} total_slides={7}>
			<h1 class="text-lg">OVERVIEW</h1>
			<div class="grid grid-cols-3 gap-4">
				<div class="flex flex-col gap-3">
					<p class="uppercase">Pros</p>
					<ol class="text-fg-soft">
						<li>All pros from using Ima</li>
						<li>Zero framework overhead: just Bun + Ima</li>
						<li>The build system is readable, hackable code</li>
						<li>Same JSX works at build time and in browser</li>
						<li>Island hydration keeps client JS minimal</li>
					</ol>
				</div>
				<div class="flex flex-col gap-3">
					<p class="uppercase">Cons</p>
					<ol class="text-fg-soft">
						<li>No ecosystem: everything is manual</li>
						<li>LLMs are biased towards React-like code with JSX</li>
						<li>Hydration pattern requires manual wiring</li>
						<li>You maintain the build script yourself</li>
						<li>New mental model for reactivity</li>
					</ol>
				</div>
				<div class="flex flex-col gap-3">
					<p class="uppercase">Todos</p>
					<ol class="text-fg-soft">
						<li>Try Astro + Ima</li>
						<li>Cloudflare Workers for SSR (WIP)</li>
						<li>More real-world examples, guides, etc</li>
						<li>Create NPM packages and shit</li>
					</ol>
				</div>
			</div>
			<hr />
			<div class="flex flex-col gap-2 items-center text-center">
				<p>Source: github.com/fergarram/ima-page</p>
				<p class="text-fg-soft">Questions?</p>
			</div>
		</SlideLayout>
	);
}
