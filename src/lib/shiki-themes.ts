import type { ThemeRegistration } from "shiki";

//
// Shiki theme
//
// Colors reference the dedicated --code-* CSS variables in global.css. Those
// variables hold the original syntax palette and switch between light and dark
// via prefers-color-scheme, so code blocks adapt automatically.
//

export const shiki_minimal: ThemeRegistration = {
	name: "minimal",
	type: "dark",
	colors: {
		"editor.background": "var(--code-bg)",
		"editor.foreground": "var(--code-fg)",
		"editor.lineHighlightBackground": "var(--code-line-highlight)",
		"editorLineNumber.foreground": "var(--code-line-number)",
		"editorLineNumber.activeForeground": "var(--code-line-number-active)",
		"editorCursor.foreground": "var(--code-cursor)",
		"editor.selectionBackground": "var(--code-selection)",
	},
	tokenColors: [
		{
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: "var(--code-comment)",
			},
		},
		{
			scope: ["variable", "variable.other"],
			settings: {
				foreground: "var(--code-fg)",
			},
		},
		{
			scope: ["string", "punctuation.definition.string"],
			settings: {
				foreground: "var(--code-string)",
			},
		},
		{
			scope: ["constant.numeric", "constant.language.boolean", "constant.language.null"],
			settings: {
				foreground: "var(--code-string)",
			},
		},
		{
			scope: ["keyword", "storage.type", "storage.modifier"],
			settings: {
				foreground: "var(--code-keyword)",
			},
		},
		{
			scope: ["keyword.operator"],
			settings: {
				foreground: "var(--code-fg)",
			},
		},
		{
			scope: ["entity.name.type", "entity.name.class", "support.class"],
			settings: {
				foreground: "var(--code-fg)",
			},
		},
		{
			scope: ["entity.name.tag", "punctuation.definition.tag"],
			settings: {
				foreground: "var(--code-fg)",
			},
		},
		{
			scope: ["entity.other.attribute-name"],
			settings: {
				foreground: "var(--code-fg)",
			},
		},
	],
};
