import { SlideLayout } from "@/components/slide-layout";
import { Logo } from "@/components/logo";

export default function () {
	return (
		<SlideLayout title="SSG with Bun & Ima" slide_number={1} total_slides={7}>
			<div class="flex flex-col items-center gap-6 text-center">
				<Logo />
				<h1 class="text-lg">SSG WITH BUN & IMA</h1>
				<p class="text-fg-soft">
					A single build.ts, JSX, and island hydration
				</p>
			</div>
		</SlideLayout>
	);
}
