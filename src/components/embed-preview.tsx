type EmbedPreviewProps = {
	src: string;
	title: string;
	editor_url?: string;
};

export function EmbedPreview(props: EmbedPreviewProps) {
	return (
		<figure>
			<iframe
				title="Embed preview"
				src={props.src}
				class="w-full aspect-video overflow-hidden rounded-2"
			></iframe>
			<figcaption class="border-t border-line h-7 flex items-center justify-between">
				<a
					class="underline"
					href={props.src}
					target="_blank"
					rel="noopener noreferrer"
				>
					{props.title}
				</a>
				{props.editor_url && (
					<a
						href={props.editor_url}
						class="flex items-center gap-1"
						target="_blank"
						rel="noopener noreferrer"
					>
						Open in editor{" "}
						<svg
							class="w-4 h-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path d="M18 13v6H5V8h6" />
							<polyline points="15 3 21 3 21 9" />
							<line x1="10" y1="14" x2="21" y2="3" />
						</svg>
					</a>
				)}
			</figcaption>
		</figure>
	);
}
