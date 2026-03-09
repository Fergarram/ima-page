import { SlideLayout } from "@/components/slide-layout";
import { CodeSnippet } from "@/components/code-snippet";

const simple_island = await CodeSnippet({
	language: "tsx",
	show_line_numbers: false,
	content: `"hydrate";

// Hydration: find placeholder, replace with live version
if (typeof window !== "undefined") {
    const els = document.querySelectorAll(
        "[component='clicks-example']"
    );
    for (const el of els) {
        el.replaceWith(<ClicksExample />);
    }
}

export function ClicksExample() {
    let clicks = 0;
    return (
        <div component="clicks-example">
            <button onclick={() => clicks++}>
                {() => \`\${clicks} clicks\`}
            </button>
        </div>
    );
}`,
});

const complex_island = await CodeSnippet({
	language: "tsx",
	show_line_numbers: false,
	content: `"hydrate";

import { cn } from "@/lib/cn";
import { encodeProps, hydrateComponents, IS_CLIENT } from "@/lib/hydration";
import { ScrollOverlay } from "@/components/scroll-overlay";

//
// Types
//

type TabItem = {
	name: string;
	label: string;
	content: string;
	class?: string;
};

type TabsMeta = {
	active: string;
	class?: string;
	items: {
		name: string;
		label: string;
		class?: string;
	}[];
};

type TabsProps = {
	active: string;
	class?: string;
	items: TabItem[];
};

//
// Client-side hydration
//

hydrateComponents<TabsMeta>("tabs", (el, props) => {
	const panel_elements = Array.from(el.querySelectorAll("[data-tab-panel]"));

	const items: TabItem[] = props.items.map((item, i) => ({
		...item,
		content: panel_elements[i]?.innerHTML || "",
	}));

	el.replaceWith(
		<Tabs active={props.active} class={props.class} items={items} />,
	);
});

//
// Component
//

export function Tabs({ active, items, class: classes }: TabsProps) {
	let current_tab = active;

	const meta: TabsMeta = {
		active,
		class: classes,
		items: items.map(({ content, ...rest }) => rest),
	};

	return (
		<section
			component="tabs"
			props={!IS_CLIENT ? encodeProps(meta) : null}
			class={cn(
				"relative grid w-full shadow-[0_0_0_1px_var(--color-line)]",
				classes,
			)}
		>
			<div class="flex w-full overflow-x-auto hide-scrollbars relative z-10">
				{items.map((item) => (
					<button
						type="button"
						data-tab={item.name}
						onClick={() => {
							current_tab = item.name;
						}}
						class={() =>
							cn(
								"flex whitespace-nowrap shrink-0 items-center justify-center px-5 min-w-16 h-7 border border-t-0 first:border-l-0 bg-base",
								current_tab === item.name
									? "border-line relative z-20 bg-surface-code border-b-transparent"
									: "border-transparent border-b-line hover:cursor-pointer",
							)
						}
					>
						{item.label}
					</button>
				))}
				<ScrollOverlay class="border-b border-line grow" />
			</div>
			{items.map((item) => (
				<div
					data-tab-panel={item.name}
					class={() =>
						cn(
							"w-full grid overflow-hidden bg-surface-code",
							current_tab !== item.name && "hidden",
							item.class,
						)
					}
					innerHTML={item.content}
				/>
			))}
		</section>
	);
}
`,
});

export default function () {
	return (
		<SlideLayout title="Island Hydration" slide_number={6} total_slides={7}>
			<h1 class="text-lg">ISLAND HYDRATION</h1>
			<p>
				Files with a "hydrate" directive get bundled as client JS modules.
				<br />
				Each module runs at import-time.
			</p>
			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col gap-2">
					<p class="text-fg-soft">No props</p>
					<div class="border border-line bg-surface-code overflow-auto max-h-96">
						{simple_island}
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<p class="text-fg-soft">With props</p>
					<div class="border border-line bg-surface-code overflow-auto max-h-96">
						{complex_island}
					</div>
				</div>
			</div>
		</SlideLayout>
	);
}
