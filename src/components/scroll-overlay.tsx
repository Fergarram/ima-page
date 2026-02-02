import { cn } from "@/lib/cn";

export function ScrollOverlay(props: any) {
	return (
		<div
			class={cn(
				"sticky pointer-events-none top-0 right-0 min-w-32 min-h-full bg-linear-to-r from-transparent to-base z-10",
				props.class,
			)}
		></div>
	);
}
