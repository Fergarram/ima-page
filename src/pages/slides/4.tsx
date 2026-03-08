import { SlideLayout } from "@/components/slide-layout";
import { CodeSnippet } from "@/components/code-snippet";

const jsx_runtime = await CodeSnippet({
	language: "ts",
	show_line_numbers: false,
	content: `// jsx-runtime.ts (simplified)
import { useTags, useStaticTags } from "ima";

const is_static = typeof window === "undefined";
const tags = is_static ? useStaticTags() : useTags();

export function jsx(tag, props) {
    // If tag is a function, it's a component
    if (typeof tag === "function") return tag(props);

    const { children, ...attrs } = props;
    const child_list = Array.isArray(children)
        ? children : [children];

    // Delegate to ima's tag function
    return tags[tag](attrs, ...child_list);
}`,
});

const usage_example = await CodeSnippet({
	language: "tsx",
	show_line_numbers: false,
	content: `// What you write (JSX):
let count = 0;

const ui = <div>
    <button onclick={() => count++}>
        {() => \`\${count} clicks\`}
    </button>
</div>;

// What it compiles to (tag functions):
const ui = tags.div(
    tags.button({ onclick: () => count++ },
        () => \`\${count} clicks\`
    )
);`,
});

export default function () {
	return (
		<SlideLayout title="IMA-JSX Runtime" slide_number={4} total_slides={8}>
			<h1 class="text-xl">HOW IMA-JSX WORKS</h1>
			<p>
				The JSX runtime is a thin wrapper that maps JSX syntax to ima tag
				functions. Bun/TypeScript compiles JSX into function calls, we just
				point them at ima.
			</p>
			<div class="grid grid-cols-2 gap-4">
				<div class="border border-line bg-surface-code overflow-auto">
					{jsx_runtime}
				</div>
				<div class="border border-line bg-surface-code overflow-auto">
					{usage_example}
				</div>
			</div>
		</SlideLayout>
	);
}
