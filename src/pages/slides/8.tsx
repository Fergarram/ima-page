import { SlideLayout } from "@/components/slide-layout";

export default function () {
	return (
		<SlideLayout title="What's Next" slide_number={8} total_slides={8}>
			<h1 class="text-xl">WHAT'S NEXT</h1>
			<div class="flex flex-col gap-6">
				<div class="flex flex-col gap-3">
					<p class="text-highlight">Done</p>
					<ol class="text-fg-soft">
						<li>JSX runtime wrapping ima tag functions</li>
						<li>Static site generation with Bun</li>
						<li>Island hydration via "hydrate" directive</li>
						<li>Tailwind CSS integration</li>
						<li>Props encoding/decoding for hydration</li>
					</ol>
				</div>
				<div class="flex flex-col gap-3">
					<p class="text-highlight">Exploring</p>
					<ol class="text-fg-soft">
						<li>Cloudflare Workers adapter for SSR</li>
						<li>Streaming HTML responses</li>
						<li>More complex hydration patterns (nested islands)</li>
						<li>Developer tooling (HMR, error overlays)</li>
					</ol>
				</div>
				<hr />
				<div class="flex flex-col gap-2 items-center text-center">
					<p>Source: github.com/fergarram/ima-page</p>
					<p class="text-fg-soft">Questions?</p>
				</div>
			</div>
		</SlideLayout>
	);
}
