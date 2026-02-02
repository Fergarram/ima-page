"hydrate";

import { cn } from "@/lib/cn";
// import { Test } from "./test";
import { decodeProps, encodeProps } from "@/lib/hydration";
import { ScrollOverlay } from "@/components/scroll-overlay";

//
// Types
//

type TabItem = {
	name: string;
	label: string;
	content: string;
};

type TabsProps = {
	active: string;
	items: TabItem[];
};

//
// Client-side hydration
//

if (typeof window !== "undefined") {
	const tab_components = Array.from(document.querySelectorAll("[component='tabs']"));

	for (const tab_component of tab_components) {
		const encoded = tab_component.getAttribute("props") || "";
		const props = decodeProps<TabsProps>(encoded);
		tab_component.replaceWith(<Tabs {...props} />);
	}
}

//
// Component
//

export function Tabs({ active, items }: TabsProps) {
	let current_tab = active;

	const is_hydrating = typeof window !== "undefined";

	return (
		<section
			component="tabs"
			props={!is_hydrating ? encodeProps({ active, items }) : null}
			class="grid w-full max-w-full"
		>
			<div class="flex w-full overflow-x-auto hide-scrollbars relative">
				{items.map((item) => (
					<button
						data-tab={item.name}
						onClick={() => {
							current_tab = item.name;
						}}
						class={() =>
							cn(
								"flex whitespace-nowrap shrink-0 items-center justify-center px-5 min-w-16 h-7 border border-b-0 bg-base",
								current_tab === item.name
									? "border-line relative z-20"
									: "border-transparent hover:cursor-pointer border-b-base",
							)
						}
					>
						{item.label}
					</button>
				))}
				<ScrollOverlay />
				<div class="w-full absolute bottom-0 left-0 h-px bg-line z-10"></div>
			</div>
			{items.map((item) => (
				<div
					data-tab={item.name}
					class={() =>
						cn(
							"w-full grid overflow-auto p-5 border border-line border-t-0 bg-base",
							current_tab !== item.name && "hidden",
						)
					}
					innerHTML={item.content}
				/>
			))}
			{/* This doesn't have a "hydrate"; but it will run as client because it was imported by this client component */}
			{/*<Test />*/}
		</section>
	);
}
