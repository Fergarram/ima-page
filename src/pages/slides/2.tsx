import { SlideLayout } from "@/components/slide-layout";
import { CodeSnippet } from "@/components/code-snippet";

const tag_example = await CodeSnippet({
	language: "js",
	show_line_numbers: false,
	content: `import { useTags } from "ima";
const { div, button } = useTags();

let count = 0;

const ui = div(
	button(
		{
			onclick: () => count++
		},
		() => \`\${count} clicks\`
	)
);

document.body.appendChild(ui);`,
});

export default function () {
	return (
		<SlideLayout title="Ima Recap" slide_number={2} total_slides={7}>
			<h1 class="text-lg">IMA RECAP</h1>
			<div class="flex flex-col gap-4">
				<p>Ima (今, "now" in Japanese) is a ~555 line UI rendering library.</p>
				<ol class="text-fg-soft">
					<li>No virtual DOM, no diffing.</li>
					<li>State is just variables. Read and mutate directly.</li>
					<li>Reactivity is explicit, not implicit.</li>
					<li>Two rendering modes: useStaticTags() returns HTML strings, useTags() returns live DOM elements.</li>
				</ol>
			</div>
			<div class="border border-line bg-surface-code">{tag_example}</div>
		</SlideLayout>
	);
}
