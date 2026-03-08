import { SlideLayout } from "@/components/slide-layout";
import { CodeSnippet } from "@/components/code-snippet";

const jsx_runtime = await CodeSnippet({
	language: "ts",
	show_line_numbers: false,
	content: `// simplified version

import { useTags, useStaticTags } from "ima";

const is_static = typeof window === "undefined";
const tags = is_static ? useStaticTags() : useTags();

export function jsx(tag, props) {
    if (typeof tag === "function") return tag(props);

    const { children, ...attrs } = props;
    return tags[tag](attrs, ...children);
}`,
});

const dual_mode = await CodeSnippet({
	language: "tsx",
	show_line_numbers: false,
	content: `export function Clicker() {
    let clicks = 0;

    return (
        <button onclick={() => clicks++}>
            {() => \`\${clicks} clicks\`}
        </button>
    );
}



`,
});

export default function () {
	return (
		<SlideLayout title="Ima + JSX" slide_number={3} total_slides={6}>
			<h1 class="text-xl">IMA + JSX</h1>
			<ol>
				<li>Bun compiles JSX into function calls.</li>
				<li>If runtime is server, those functions return strings.</li>
				<li>If runtime is browser, those functions return DOM elements.</li>
			</ol>

			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col gap-2">
					<p class="text-fg-soft">JSX runtime</p>
					<div class="border border-line bg-surface-code overflow-auto">
						{jsx_runtime}
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<p class="text-fg-soft">JSX example</p>
					<div class="border border-line bg-surface-code overflow-auto">
						{dual_mode}
					</div>
				</div>
			</div>
		</SlideLayout>
	);
}
