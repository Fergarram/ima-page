import { cn } from "@/lib/cn";

//
// Types
//

type SlideLayoutProps = {
	title: string;
	slide_number: number;
	total_slides: number;
	children: any;
};

//
// Component
//

export function SlideLayout(props: SlideLayoutProps) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>{props.title}</title>
				<link rel="stylesheet" href="/global.css" />
			</head>
			<body
				data-slide-number={props.slide_number}
				data-total-slides={props.total_slides}
			>
				<main class="w-screen h-screen flex flex-col">
					<div class="flex-1 flex items-center justify-center px-8 py-6">
						<div class="max-w-7xl w-full flex flex-col gap-8">
							{props.children}
						</div>
					</div>
					<nav class="grid grid-cols-3 w-full items-center justify-between px-8 py-4 border-t border-line text-fg-soft">
						<div class="flex gap-4">
							{props.slide_number > 1 ? (
								<a href={`/slides/${props.slide_number - 1}`}>← prev</a>
							) : (
								"-"
							)}
						</div>
						<span class="text-center">
							{props.slide_number}/{props.total_slides}
						</span>
						<div class="flex gap-4 justify-end">
							{props.slide_number < props.total_slides ? (
								<a href={`/slides/${props.slide_number + 1}`}>next →</a>
							) : (
								"-"
							)}
						</div>
					</nav>
				</main>
			</body>
		</html>
	);
}
