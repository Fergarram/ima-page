import { SlideLayout } from "@/components/slide-layout";
import { CodeSnippet } from "@/components/code-snippet";

const server_code = await CodeSnippet({
	language: "tsx",
	show_line_numbers: false,
	content: `// On the server (build time):
// typeof window === "undefined" → true
// useTags() returns useStaticTags()
// Tag functions return HTML strings
// JSX compiles to string concatenation

export function Header() {
    return (
        <header>
            <nav>
                <a href="/">Home</a>
            </nav>
        </header>
    );
}
// Output: "<header><nav><a href=\\"/\\">Home</a></nav></header>"`,
});

const client_code = await CodeSnippet({
	language: "tsx",
	show_line_numbers: false,
	content: `// On the client (browser):
// typeof window === "undefined" → false
// useTags() returns DOM tag functions
// Tag functions return HTMLElement nodes
// Reactive callbacks polled each frame

export function ClicksExample() {
    let clicks = 0;
    return (
        <button onclick={() => clicks++}>
            {() => \`\${clicks} clicks\`}
        </button>
    );
}
// Output: HTMLButtonElement (live, reactive)`,
});

export default function () {
	return (
		<SlideLayout title="Dual Mode" slide_number={7} total_slides={8}>
			<h1 class="text-xl">SAME CODE, TWO MODES</h1>
			<p>
				The same JSX runtime automatically switches between static HTML
				generation and live DOM rendering based on the environment. No
				conditional imports, no separate server/client files.
			</p>
			<div class="grid grid-cols-2 gap-4">
				<div class="flex flex-col gap-2">
					<p class="text-highlight">Server (build time)</p>
					<div class="border border-line bg-surface-code overflow-auto max-h-80">
						{server_code}
					</div>
				</div>
				<div class="flex flex-col gap-2">
					<p class="text-highlight">Client (browser)</p>
					<div class="border border-line bg-surface-code overflow-auto max-h-80">
						{client_code}
					</div>
				</div>
			</div>
		</SlideLayout>
	);
}
