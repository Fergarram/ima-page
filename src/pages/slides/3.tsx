import { SlideLayout } from "@/components/slide-layout";

export default function () {
	return (
		<SlideLayout title="The Problem" slide_number={3} total_slides={8}>
			<h1 class="text-xl">THE PROBLEM WITH TYPICAL FRAMEWORKS</h1>
			<div class="flex flex-col gap-6">
				<p>
					When building interactive apps (games, canvases, maps,
					visualizations), you already have complex state. Frameworks add
					another layer:
				</p>
				<div class="grid grid-cols-2 gap-4">
					<div class="border border-line p-4 flex flex-col gap-2">
						<p class="text-highlight">React / Vue / Svelte</p>
						<ol class="text-fg-soft">
							<li>useState, useEffect, lifecycle hooks</li>
							<li>Stale closure bugs</li>
							<li>State sync between your app and the framework</li>
							<li>Re-render mental model overhead</li>
						</ol>
					</div>
					<div class="border border-line p-4 flex flex-col gap-2">
						<p class="text-highlight">Ima</p>
						<ol class="text-fg-soft">
							<li>Plain variables</li>
							<li>Always reads current value (polled each frame)</li>
							<li>Your app state IS the UI state</li>
							<li>No lifecycle, no hooks, no subscriptions</li>
						</ol>
					</div>
				</div>
			</div>
		</SlideLayout>
	);
}
