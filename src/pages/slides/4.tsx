import { SlideLayout } from "@/components/slide-layout";

export default function () {
	return (
		<SlideLayout
			title="build.ts as Framework"
			slide_number={4}
			total_slides={6}
		>
			<h1 class="text-xl">BUN BUILD.TS AS A FRAMEWORK</h1>
			<p>Static site generation can fit in a small bun script.</p>
			<a class="text-highlight! underline" href="/">
				LIVE EXAMPLE
			</a>
		</SlideLayout>
	);
}
