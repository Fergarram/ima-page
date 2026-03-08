"hydrate";

//
// Client-side hydration
//

if (typeof window !== "undefined") {
	const current_slide = Number(
		document
			.querySelector("[data-slide-number]")
			?.getAttribute("data-slide-number") || "0",
	);
	const total_slides = Number(
		document
			.querySelector("[data-total-slides]")
			?.getAttribute("data-total-slides") || "0",
	);

	document.addEventListener("keydown", (e) => {
		if (e.key === "ArrowRight" || e.key === "ArrowDown") {
			if (current_slide < total_slides) {
				window.location.href = `/slides/${current_slide + 1}`;
			}
		}

		if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
			if (current_slide > 1) {
				window.location.href = `/slides/${current_slide - 1}`;
			}
		}
	});
}
