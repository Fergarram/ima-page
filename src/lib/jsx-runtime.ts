import {
	useTags,
	useStaticTags,
	type Child,
	type TagArgs,
	type TagFunction,
	type StaticTagFunction,
} from "ima";

//
// Types
//

type TagLookup = Record<string, TagFunction | StaticTagFunction>;

type ComponentFunction = (
	props: JSXProps,
) => Element | string | DocumentFragment;

type JSXProps = {
	children?: Child | Child[];
	[key: string]: unknown;
};

type JSXTag = string | ComponentFunction;

//
// Tags
//

const is_static = typeof window === "undefined";
const tags: TagLookup = is_static ? useStaticTags() : useTags();

//
// JSX Runtime
//

export function jsx(
	tag: JSXTag,
	props: JSXProps,
): Element | string | DocumentFragment {
	if (typeof tag === "function") {
		return tag(props);
	}

	const { children, ...attrs } = props;

	const child_list: Child[] =
		children == null
			? []
			: Array.isArray(children)
				? children
				: [children as Child];

	const tagFn = tags[tag];

	if (tagFn === undefined) return "";

	if (Object.keys(attrs).length > 0) {
		return tagFn(...([attrs, ...child_list] as TagArgs));
	}

	return tagFn(...(child_list as TagArgs));
}

export const jsxs = jsx;
export const jsxDEV = jsx;

//
// Fragment
//

export function Fragment(props: {
	children?: Child | Child[];
}): Element | string | DocumentFragment {
	const children = props.children;

	if (is_static) {
		if (Array.isArray(children)) {
			return children.flat(Infinity).join("");
		}
		return String(children ?? "");
	}

	if (children == null) {
		return document.createDocumentFragment();
	}

	if (Array.isArray(children)) {
		const fragment = document.createDocumentFragment();
		for (const child of children.flat(Infinity) as Child[]) {
			if (child instanceof Node) {
				fragment.appendChild(child);
			} else if (child != null) {
				fragment.appendChild(document.createTextNode(String(child)));
			}
		}
		return fragment;
	}

	if (children instanceof Node) {
		return children as Element;
	}

	return document.createTextNode(String(children)) as unknown as Element;
}
