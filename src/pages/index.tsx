import { Header } from "@/components/header";
import { cn } from "@/lib/cn";
import Readme from "@/sections/readme";
import Source from "@/sections/source";

export default function () {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Ima — An immediate-mode inspired UI rendering library</title>
				<link rel="stylesheet" href="/global.css" />
			</head>
			<body>
				<main class="mt-6 md:mt-30 flex flex-col gap-6">
					<Header />
					<article
						class={cn(
							"flex flex-col gap-6 items-center px-5",
							"*:w-full",
							"*:max-w-article",
						)}
					>
						<Readme />
						{/*<Examples />*/}
						<Source />
					</article>
					<footer class="flex flex-col items-center py-8">
						<p>
							Made by{" "}
							<a
								href="https://fernando.works/"
								rel="noopener noreferrer"
								target="_blank"
							>
								Fernando Garcia
							</a>{" "}
							© {new Date().getFullYear()}
						</p>
					</footer>
				</main>
			</body>
		</html>
	);
}
