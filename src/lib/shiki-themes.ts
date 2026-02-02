import type { ThemeRegistration } from "shiki";

//
// Shiki themes
//

export const shiki_minimal_dark: ThemeRegistration = {
	name: "minimal-dark",
	type: "dark",
	colors: {
		"editor.background": "var(--color-base)",
		"editor.foreground": "#ffffff",
		"editor.lineHighlightBackground": "#aafee717",
		"editorLineNumber.foreground": "#444444",
		"editorLineNumber.activeForeground": "#cacaca",
		"editorCursor.foreground": "#cacaca",
		"editor.selectionBackground": "#aafee717",
	},
	tokenColors: [
		{
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: "#aafee7",
			},
		},
		{
			scope: ["variable", "variable.other"],
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			scope: ["string", "punctuation.definition.string"],
			settings: {
				foreground: "#d0d0d0",
			},
		},
		{
			scope: ["constant.numeric", "constant.language.boolean", "constant.language.null"],
			settings: {
				foreground: "#d0d0d0",
			},
		},
		{
			scope: ["keyword", "storage.type", "storage.modifier"],
			settings: {
				foreground: "#a0a0a0",
			},
		},
		{
			scope: ["keyword.operator"],
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			scope: ["entity.name.type", "entity.name.class", "support.class"],
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			scope: ["entity.name.tag", "punctuation.definition.tag"],
			settings: {
				foreground: "#ffffff",
			},
		},
		{
			scope: ["entity.other.attribute-name"],
			settings: {
				foreground: "#ffffff",
			},
		},
	],
};

export const shiki_minimal_light: ThemeRegistration = {
	name: "minimal-light",
	type: "light",
	colors: {
		"editor.background": "#ffffff",
		"editor.foreground": "#1a1a1a",
		"editor.lineHighlightBackground": "#0066ff0a",
		"editorLineNumber.foreground": "#999999",
		"editorLineNumber.activeForeground": "#1a1a1a",
		"editorCursor.foreground": "#1a1a1a",
		"editor.selectionBackground": "#0066ff0a",
	},
	tokenColors: [
		{
			scope: ["comment", "punctuation.definition.comment"],
			settings: {
				foreground: "#008080",
			},
		},
		{
			scope: ["variable", "variable.other"],
			settings: {
				foreground: "#1a1a1a",
			},
		},
		{
			scope: ["string", "punctuation.definition.string"],
			settings: {
				foreground: "#505050",
			},
		},
		{
			scope: ["constant.numeric", "constant.language.boolean", "constant.language.null"],
			settings: {
				foreground: "#505050",
			},
		},
		{
			scope: ["keyword", "storage.type", "storage.modifier"],
			settings: {
				foreground: "#707070",
			},
		},
		{
			scope: ["keyword.operator"],
			settings: {
				foreground: "#1a1a1a",
			},
		},
		{
			scope: ["entity.name.type", "entity.name.class", "support.class"],
			settings: {
				foreground: "#1a1a1a",
			},
		},
		{
			scope: ["entity.name.tag", "punctuation.definition.tag"],
			settings: {
				foreground: "#1a1a1a",
			},
		},
		{
			scope: ["entity.other.attribute-name"],
			settings: {
				foreground: "#1a1a1a",
			},
		},
	],
};
