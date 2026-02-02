import { useTags, useStaticTags } from "ima";

export function Fragment(props: { children?: any }): any {
	const children = props.children;

	if (typeof window === "undefined") {
		if (Array.isArray(children)) {
			return children.flat(Infinity).join("");
		}
		return children ?? "";
	}

	if (children == null) {
		return document.createDocumentFragment();
	}

	if (Array.isArray(children)) {
		const fragment = document.createDocumentFragment();
		for (const child of children.flat(Infinity)) {
			if (child != null) {
				if (child instanceof Node) {
					fragment.appendChild(child);
				} else {
					fragment.appendChild(document.createTextNode(String(child)));
				}
			}
		}
		return fragment;
	}

	return children;
}

/**
 * Automatic JSX runtime function.
 * Called by the compiler for single-child elements.
 */
export function jsx(tag: string | ((props: any) => any), props: Record<string, any> | null): any {
	if (typeof tag === "function") {
		return tag(props || {});
	}

	const is_static = typeof window === "undefined";
	const tags = is_static ? useStaticTags() : useTags();
	const tagFn = (tags as Record<string, (...args: any[]) => any>)[tag];

	const { children, ...attrs } = props || {};
	const has_attrs = Object.keys(attrs).length > 0;

	if (children == null) {
		return has_attrs ? tagFn(attrs) : tagFn();
	}

	if (has_attrs) {
		return Array.isArray(children) ? tagFn(attrs, ...children) : tagFn(attrs, children);
	}

	return Array.isArray(children) ? tagFn(...children) : tagFn(children);
}

/**
 * Automatic JSX runtime function for multiple children.
 * Identical to jsx() since children are already in props.
 */
export const jsxs = jsx;

/**
 * Development version (same as production for this use case).
 */
export const jsxDEV = jsx;
