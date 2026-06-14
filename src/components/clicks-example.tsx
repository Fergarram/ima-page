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
		<div component="clicks-example" class="flex w-full h-48 items-center justify-center outline outline-line bg-surface-code">
			<button
				type="button"
				onclick={() => clicks++}
				class="bg-surface hover:bg-line/30 border border-line text-fg px-2.5 py-1 flex items-center justify-center"
			>
				{() => `${clicks} clicks`}
			</button>
		</div>
	);
}
