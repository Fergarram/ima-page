import { SlideLayout } from "@/components/slide-layout";
import { Logo } from "@/components/logo";

export default function () {
	return (
		<SlideLayout title="IMA-JSX" slide_number={1} total_slides={8}>
			<div class="flex flex-col items-center gap-6 text-center">
				<Logo />
				<h1 class="text-xl">IMA-JSX</h1>
				<p class="text-fg-soft">
					Using JSX with an immediate-mode inspired UI library
				</p>
				<hr class="w-48" />
				<p class="text-fg-soft">
					Static generation, island hydration, zero framework overhead
				</p>
			</div>
		</SlideLayout>
	);
}
