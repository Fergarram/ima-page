//
// Helpers
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
