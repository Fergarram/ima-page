import { shiki_minimal_dark, shiki_minimal_light } from "@/lib/shiki-themes";
import { codeToHtml } from "shiki";

//
// Types
//

type CodeSnippetProps = {
	language: string;
	content: string;
	theme?: "dark" | "light";
};

//
// Functions
//

function wrapUrlsInAnchors(html: string): string {
	const url_pattern = /(https?:\/\/[^\s<>"]+)/g;

	return html.replace(url_pattern, (url) => {
		return (
			<a class="text-inherit!" href={url} target="_blank" rel="noopener noreferrer">
				{url}
			</a>
		);
	});
}

//
// Component
//

export async function CodeSnippet(props: CodeSnippetProps) {
	const { language, content, theme = "dark" } = props;

	let html = await codeToHtml(content, {
		lang: language,
		theme: theme === "dark" ? shiki_minimal_dark : shiki_minimal_light,
	});

	html = wrapUrlsInAnchors(html);

	return <div innerHTML={html} />;
}
