interface categoryHandlerProps {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
	imgCon: React.RefObject<HTMLDivElement>;
	activeHandler: React.RefObject<HTMLDivElement>;
}
export default function categoryHandler({
	active,
	setActive,
	imgCon,
	activeHandler,
}: categoryHandlerProps) {
	const projectCategories = Array.from(
		imgCon.current!.querySelector("div[data-active]")!.children
	) as Element[];
	projectCategories.forEach((cat) => {
		cat.addEventListener("mouseover", (e) => {
			const el = e.currentTarget as HTMLElement;

			removeActiveState();

			el.style.opacity = "1";
		});

		cat.addEventListener("mouseleave", mouseLeaveHandler);

		cat.addEventListener("click", (el) => {
			let element = el.currentTarget as Element;
			console.log(element?.tagName);
			if (element?.tagName !== "BUTTON") return;
			let button = element as HTMLButtonElement;
			setActive(button.dataset.name!);
			activeHandler.current!.dataset.active = button.dataset.name;
		});
	});
	function removeActiveState() {
		projectCategories.forEach((el) => {
			const element = el as HTMLElement;
			element.style.opacity = "0.4";
		});
	}
	function mouseLeaveHandler() {
		removeActiveState();
		if (active === "all") {
			projectCategories.forEach((el) => {
				const element = el as HTMLButtonElement;
				element.style.opacity = "1";
			});
		} else {
			projectCategories.forEach((el) => {
				const element = el as HTMLButtonElement;
				if (active === element.dataset.name) {
					element.style.opacity = "1";
				}
			});
		}
	}

	mouseLeaveHandler();
}
