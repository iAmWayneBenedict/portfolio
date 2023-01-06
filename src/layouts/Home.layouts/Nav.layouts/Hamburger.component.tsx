import React, { useRef } from "react";
import { useEffect, useState } from "react";

const Hamburger = () => {
	const topLine = useRef<HTMLSpanElement>(null);
	const bottomLine = useRef<HTMLSpanElement>(null);

	let active = false;

	let handleClick = (event: React.MouseEvent) => {
		let top = event.currentTarget.children[0] as HTMLSpanElement;
		let bottom = event.currentTarget.children[1] as HTMLSpanElement;

		top.style.transform = "rotate(0deg)";
		bottom.style.transform = "rotate(0deg)";

		if (active) {
			top.style.top = "3px";
			bottom.style.bottom = "3px";

			active = false;
		} else {
			top.style.top = "50%";
			top.style.transform = "translateY(-50%)";

			bottom.style.bottom = "50%";
			bottom.style.transform = "translateY(-50%)";
			active = true;
		}
	};

	let handleMouseOver = (event: React.MouseEvent) => {
		if (!active) return;

		let top = event.currentTarget.children[0] as HTMLSpanElement;
		let bottom = event.currentTarget.children[1] as HTMLSpanElement;

		top.style.transformOrigin = "center center";
		top.style.transform = "rotate(35deg)";
		bottom.style.transform = "rotate(-35deg)";
		bottom.style.transformOrigin = "center center";
	};

	let handleMouseLeave = (event: React.MouseEvent) => {
		if (!active) return;

		let top = event.currentTarget.children[0] as HTMLSpanElement;
		let bottom = event.currentTarget.children[1] as HTMLSpanElement;
		top.style.transform = "rotate(0deg)";
		bottom.style.transform = "rotate(0deg)";
	};

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
