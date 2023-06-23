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
	) as HTMLElement[];
	projectCategories.forEach((cat) => {
		cat.addEventListener("mouseover", (e) => {
			const el = e.currentTarget as HTMLElement;
			const element = el.firstElementChild as HTMLElement;
			removeActiveState();

			element.style.opacity = "1";
		});

		cat.addEventListener("mouseleave", mouseLeaveHandler);

		cat.firstElementChild!.addEventListener("click", (el) => {
			let element = el.currentTarget as HTMLElement;
			console.log(element?.tagName);
			if (element?.tagName !== "BUTTON") return;
			let button = element as HTMLButtonElement;
			setActive(button.dataset.name!);
			activeHandler.current!.dataset.active = button.dataset.name;
		});
	});
	function removeActiveState() {
		projectCategories.forEach((el) => {
			const element = el.firstElementChild as HTMLElement;
			const element2 = el.lastElementChild as HTMLElement;
			element.style.opacity = "0.4";
			element2.style.opacity = "0.4";
		});
	}
	function mouseLeaveHandler() {
		removeActiveState();
		if (active === "all") {
			projectCategories.forEach((el) => {
				const element = el.firstElementChild as HTMLButtonElement;
				const element2 = el.lastElementChild as HTMLButtonElement;
				element.style.opacity = "1";
				element2.style.opacity = "1";
			});
		} else {
			projectCategories.forEach((el) => {
				const element = el.firstElementChild as HTMLButtonElement;
				if (active === element.dataset.name) {
					element.style.opacity = "1";
				}
			});
		}
	}

	mouseLeaveHandler();
}
