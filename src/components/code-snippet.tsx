import { cn } from "@/lib/cn";
import { shiki_minimal_dark, shiki_minimal_light } from "@/lib/shiki-themes";
import { codeToHtml } from "shiki";

//
// Types
//

type CodeSnippetProps = {
	language: string;
	content: string;
	theme?: "dark" | "light";
	show_line_numbers?: boolean;
};

//
// Functions
//

function wrapUrlsInAnchors(html: string): string {
	const url_pattern = /(https?:\/\/[^\s<>"]+)/g;

	return html.replace(url_pattern, (url) => {
		return (
			<a
				class="text-inherit!"
				href={url}
				target="_blank"
				rel="noopener noreferrer"
			>
				{url}
			</a>
		);
	});
}

function computeLineNumberWidth(content: string): string {
	const line_count = content.split("\n").length;
	const digit_count = String(line_count).length;
	return `${digit_count * 0.5 + 0.5}rem`;
}

//
// Component
//

export async function CodeSnippet(props: CodeSnippetProps) {
	const { language, content, theme = "dark", show_line_numbers = true } = props;

	let html = await codeToHtml(content, {
		lang: language,
		theme: theme === "dark" ? shiki_minimal_dark : shiki_minimal_light,
	});

	html = wrapUrlsInAnchors(html);

	const line_number_width = computeLineNumberWidth(content);
	const css_var = `--line-number-width: ${line_number_width};`;

	return (
		<div
			class={cn(
				"overflow-auto inset-0",
				show_line_numbers ? "show-line-numbers p-2" : "p-5",
			)}
			style={show_line_numbers ? css_var : ""}
			innerHTML={html}
		/>
	);
}
