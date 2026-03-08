// ima-page/src/lib/hydration.ts

//
// Constants
//

export const IS_CLIENT = typeof window !== "undefined";

//
// Functions
//

export function encodeProps<T>(props: T): string {
	return btoa(JSON.stringify(props));
}

export function decodeProps<T>(encoded: string): T {
	try {
		return JSON.parse(atob(encoded));
	} catch (error) {
		console.error("Failed to decode props:", encoded);
		return {} as T;
	}
}

export function hydrateComponents<T = Record<string, never>>(
	name: string,
	callback: (el: Element, props: T) => void,
): void {
	if (!IS_CLIENT) return;

	const elements = document.querySelectorAll(`[component='${name}']`);

	for (const el of elements) {
		const encoded = el.getAttribute("props") || "";
		const props = encoded ? decodeProps<T>(encoded) : ({} as T);
		callback(el, props);
	}
}
