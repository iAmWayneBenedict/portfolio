import React, { useRef } from "react";
import { useEffect, useState } from "react";

const Hamburger = () => {
	const topLine = useRef<HTMLSpanElement>(null);
	const bottomLine = useRef<HTMLSpanElement>(null);

	const [active, setActive] = useState<boolean>(false);

	let handleClick: (event: React.MouseEvent) => void;
	let handleMouseOver: (event: React.MouseEvent) => void;
	let handleMouseLeave: (event: React.MouseEvent) => void;

	useEffect(() => {
		handleClick = (event) => {
			let top = event.currentTarget.children[0] as HTMLSpanElement;
			let bottom = event.currentTarget.children[1] as HTMLSpanElement;

			top.style.transform = "rotate(0deg)";
			bottom.style.transform = "rotate(0deg)";

			if (active) {
				top.style.top = "3px";
				bottom.style.bottom = "3px";

				setActive(false);
			} else {
				top.style.top = "50%";
				top.style.transform = "translateY(-50%)";

				bottom.style.bottom = "50%";
				bottom.style.transform = "translateY(-50%)";
				setActive(true);
			}
		};

		handleMouseOver = (event) => {
			if (!active) return;

			let top = event.currentTarget.children[0] as HTMLSpanElement;
			let bottom = event.currentTarget.children[1] as HTMLSpanElement;

			top.style.transformOrigin = "center center";
			top.style.transform = "rotate(35deg)";
			bottom.style.transform = "rotate(-35deg)";
			bottom.style.transformOrigin = "center center";
		};

		handleMouseLeave = (event) => {
			if (!active) return;

			let top = event.currentTarget.children[0] as HTMLSpanElement;
			let bottom = event.currentTarget.children[1] as HTMLSpanElement;
			top.style.transform = "rotate(0deg)";
			bottom.style.transform = "rotate(0deg)";
		};
	}, [active]);

	const handleTransitionEnd = (event: React.TransitionEvent<HTMLSpanElement>) => {
		if (!event.currentTarget) return;

		// (event.currentTarget as HTMLSpanElement).style.opacity = "0";
	};

	return (
		<button
			onClick={(e) => handleClick(e)}
			onMouseOver={(e) => handleMouseOver(e)}
			onMouseLeave={(e) => handleMouseLeave(e)}
			className="h-[20px] w-[40px] cursor-none transition-all opacity-100 relative"
		>
			<span
				ref={topLine}
				className="h-[1px] w-full bg-black absolute top-[3px] left-0 transition-all duration-500"
			></span>
			<span
				ref={bottomLine}
				onTransitionEnd={(e) => handleTransitionEnd(e)}
				className="h-[1px] w-full bg-black absolute bottom-[3px] left-0 transition-all duration-500"
			></span>
		</button>
	);
};

export default Hamburger;
