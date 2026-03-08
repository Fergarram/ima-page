"hydrate";

//
// Client-side hydration
//

if (typeof window !== "undefined") {
	const components = Array.from(document.querySelectorAll("[component='clicks-example']"));

	for (const component of components) {
		component.replaceWith(<ClicksExample />);
	}
}

//
// Component
//

export function ClicksExample() {
	let clicks = 0;

	return (
		<div component="clicks-example" class="flex w-full h-48 items-center justify-center border border-line border-t-0 bg-surface-code">
			<button
				type="button"
				onclick={() => clicks++}
				class="bg-white text-black px-2 py-0.5 flex items-center justify-center"
			>
				{() => `${clicks} clicks`}
			</button>
		</div>
	);
}
