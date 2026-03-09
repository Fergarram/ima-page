import { SlideLayout } from "@/components/slide-layout";
import { CodeSnippet } from "@/components/code-snippet";

const diagram = await CodeSnippet({
	language: "text",
	show_line_numbers: false,
	content: `src/
├── pages/                    ─── Bun entry points ──→ dist/*.html
│   ├── index.tsx
│   ├── examples/index.tsx
│
├── components/               ─── runtime agnostic by default, can be imported anywhere
│   ├── header.tsx
│   ├── slide-layout.tsx
│   ├── code-snippet.tsx
│   ├── tabs.tsx              ─┐
│   └── clicks-example.tsx    ─┤  "hydrate" directive (imported by both runtimes)
│                              │
│                              └─ Bun.build({ target: "browser" })
│                                        │
│                                        └──→  dist/components/*.js
│                                              (bundled, code-split)
│
├── lib/
│   ├── ima.ts                    the rendering engine
│   ├── jsx-runtime.ts            JSX -> ima bridge
│   └── hydration.ts              encode/decode props for islands
│
└── global.css                ─── bun-plugin-tailwind ─────→  dist/global.css`,
});

export default function () {
	return (
		<SlideLayout title="Build Pipeline" slide_number={5} total_slides={7}>
			<h1 class="text-lg">PAGE GENERATION</h1>
			<p>
				Pages become static HTML. <br />
				Components with "hydrate" get bundled separately for the browser. <br />
				Everything else is runtime agnostic.
			</p>
			<div class="border border-line bg-surface-code overflow-auto">
				{diagram}
			</div>
		</SlideLayout>
	);
}
