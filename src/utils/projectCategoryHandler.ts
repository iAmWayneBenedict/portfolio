import data from "./data";

interface categoryHandlerProps {
	active: string;
	setActive: React.Dispatch<React.SetStateAction<string>>;
	imgCon: React.RefObject<HTMLDivElement>;
	activeHandler: React.RefObject<HTMLDivElement>;
	projCon: React.RefObject<HTMLDivElement>;
	items: any;
	setItems: React.Dispatch<any>;
	setDelay: React.Dispatch<number>;
	setCategoryChanged: React.Dispatch<React.SetStateAction<string>>;
}
export default function categoryHandler({
	active,
	setActive,
	imgCon,
	activeHandler,
	projCon,
	items,
	setItems,
	setDelay,
	setCategoryChanged,
}: categoryHandlerProps) {
	const projectCategories = Array.from(
		imgCon.current!.querySelector("div[data-active]")!.children
	) as HTMLElement[];
	projCon.current!.style.transition = "all 1s ease";
	let timer = null;
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
			if (element?.tagName !== "BUTTON") return;
			let button = element as HTMLButtonElement;
			setActive(button.dataset.name!);
			activeHandler.current!.dataset.active = button.dataset.name;
			projCon.current!.classList.remove("opacity-1");
			projCon.current!.classList.add("opacity-0");

			setDelay(2);
			timer = setTimeout(() => {
				if (button.dataset.name == "all") setItems([...data.projects, ...data.designs]);
				else
					setItems((prev: any) =>
						[...data.projects, ...data.designs].filter((data: any) =>
							data.category?.includes(button.dataset.name)
						)
					);
				setCategoryChanged(button.dataset.name!);
				projCon.current!.classList.remove("opacity-0");
				projCon.current!.classList.add("opacity-1");
				setDelay(1);
			}, 1000);
		});
	});
	function removeActiveState() {
		projectCategories.forEach((el) => {
			const element = el.firstElementChild as HTMLElement;
			const element2 = el.lastElementChild as HTMLElement;
			element.style.opacity = "0.2";
			element2.style.opacity = "0.2";
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
