import { SlideLayout } from "@/components/slide-layout";
import { CodeSnippet } from "@/components/code-snippet";

const pipeline = await CodeSnippet({
	language: "text",
	show_line_numbers: false,
	content: `Build Pipeline
==============

src/
├── pages/           → Static HTML pages (SSG)
│   ├── index.tsx    → dist/index.html
│   └── examples/
│       └── index.tsx → dist/examples/index.html
├── components/      → Shared components
│   ├── header.tsx   → Server only (no directive)
│   ├── tabs.tsx     → "hydrate" → bundled for browser
│   └── clicks.tsx   → "hydrate" → bundled for browser
├── sections/        → Page sections (server only)
├── lib/
│   ├── ima.ts       → Core library
│   ├── jsx-runtime.ts → JSX → ima bridge
│   └── hydration.ts → Client hydration helpers
└── global.css       → Tailwind CSS

                    ┌──────────────┐
                    │   bun build  │
                    └──────┬───────┘
                           │
              ┌────────────┼────────────┐
              ▼            ▼            ▼
         HTML pages   Client JS   global.css
        (SSG output)  (islands)  (Tailwind)
              │            │            │
              └────────────┼────────────┘
                           ▼
                        dist/`,
});

export default function () {
	return (
		<SlideLayout title="Build Pipeline" slide_number={6} total_slides={8}>
			<h1 class="text-xl">STATIC BUILD PIPELINE</h1>
			<p>
				Single build.ts file. No webpack, no vite, no framework CLI. Just Bun's
				native bundler with the Tailwind plugin.
			</p>
			<div class="border border-line bg-surface-code overflow-auto">
				{pipeline}
			</div>
		</SlideLayout>
	);
}
