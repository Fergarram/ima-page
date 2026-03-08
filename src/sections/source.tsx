import { CodeSnippet } from "@/components/code-snippet";
import { Tabs } from "@/components/tabs";

const res = await fetch(
	"https://raw.githubusercontent.com/Fergarram/ima-page/refs/heads/main/src/lib/ima.ts",
);
const ima_src = await res.text();

const code_snippet = await CodeSnippet({
	language: "javascript",
	content: ima_src,
});

export default function () {
	return (
		<>
			<h2 id="source">SOURCE</h2>
			<p>Let me give you a walkthrough of the source code and how it works.</p>
			<div class="max-w-4xl! bg-surface-code border border-line px-0! py-1">
				{code_snippet}
			</div>
			{/*<Tabs
				active="main"
				class="max-w-4xl!"
				items={[
					{
						name: "main",
						label: "ima.ts",
						// class: "h-[80dvh]",
						content: code_snippet,
					},
				]}
			/>*/}
		</>
	);
}
