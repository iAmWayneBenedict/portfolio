import gsap from "gsap";
import React, { useRef } from "react";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { handleHamburgerAnim } from "../../../utils/handleMenu";

interface Props {
	dark?: boolean;
	delay: string | undefined;
	handleNavbar: (
		isActive: boolean,
		setActive: React.Dispatch<React.SetStateAction<boolean>>
	) => void;
}
let isToggle = true;
let timerId: number;
const Hamburger: React.FC<Props> = ({ dark, delay, handleNavbar }) => {
	const topLine = useRef<HTMLSpanElement>(null);
	const bottomLine = useRef<HTMLSpanElement>(null);
	const hamburger = useRef<HTMLButtonElement>(null);

	const [active, setActive] = useState<boolean>(false);
	const [onMount, setOnMount] = useState<boolean>(true);

	const location = useLocation();

	useEffect(() => {
		if (onMount) return;
		handleNavbar(active, setActive);
		const leftMenu = document.querySelector(".left-menu");
		leftMenu?.addEventListener("transitionend", () => console.log("ended"));
	}, [active]);

	let handleClick = (event: React.MouseEvent) => {
		handleHamburgerAnim(active, setActive);
		// timerId = setTimeout(() => {
		// 	isToggle = true;
		// }, 1000);

		// if (!isToggle) return;
		// isToggle = false;
		// clearTimeout(timerId);
		// topLine.current!.style.transform = "rotate(0deg)";
		// bottomLine.current!.style.transform = "rotate(0deg)";

		// if (active) {
		// 	topLine.current!.style.top = "3px";
		// 	bottomLine.current!.style.bottom = "3px";

		// 	setActive(false);
		// } else {
		// 	topLine.current!.style.top = "50%";
		// 	topLine.current!.style.transform = "translateY(-50%)";

		// 	bottomLine.current!.style.bottom = "50%";
		// 	bottomLine.current!.style.transform = "translateY(-50%)";
		// 	setActive(true);
		// }

		// if (dark && topLine.current!.classList.contains("bg-[black]")) {
		// 	topLine.current!.classList.remove("bg-[black]");
		// 	topLine.current!.classList.add("bg-white");
		// 	bottomLine.current!.classList.remove("bg-[black]");
		// 	bottomLine.current!.classList.add("bg-white");
		// } else if (dark && topLine.current!.classList.contains("bg-white")) {
		// 	topLine.current!.classList.add("bg-[black]");
		// 	topLine.current!.classList.remove("bg-white");
		// 	bottomLine.current!.classList.add("bg-[black]");
		// 	bottomLine.current!.classList.remove("bg-white");
		// }

		setOnMount(false);
	};

	let handleMouseOver = (event: React.MouseEvent) => {
		if (!active) return;

		topLine.current!.style.transformOrigin = "center center";
		topLine.current!.style.transform = "rotate(35deg)";
		bottomLine.current!.style.transform = "rotate(-35deg)";
		bottomLine.current!.style.transformOrigin = "center center";
	};

	let handleMouseLeave = (event: React.MouseEvent) => {
		if (!active) return;

		topLine.current!.style.transform = "rotate(0deg)";
		bottomLine.current!.style.transform = "rotate(0deg)";
	};

	useEffect(() => {
		const tl = gsap.timeline();
		tl.fromTo(
			topLine.current,
			{ width: 0 },
			{
				duration: 1,
				delay: 1,
				width: "100%",
			},
			location.pathname === "/" && delay === "+=10.5" ? "+=10.5" : "+=.5"
		).fromTo(
			bottomLine.current,
			{ width: 0 },
			{
				duration: 1,
				width: "100%",
			},
			"-=.7"
		);

		return () => {
			tl.kill();
			gsap.registerPlugin([]);
		};
	}, [location]);

	return (
		<button
			title="menu"
			ref={hamburger}
			onClick={(e) => handleClick(e)}
			onMouseOver={(e) => handleMouseOver(e)}
			onMouseLeave={(e) => handleMouseLeave(e)}
			className="hamburger h-[20px] w-[40px] transition-all opacity-100 relative justify-end order-3 ml-5 z-[1000]"
		>
			<span
				ref={topLine}
				className={`top-hamburger-line h-[1px] w-0 ${
					dark ? "bg-white" : "bg-[black]"
				} absolute top-[3px] left-0 transition-all duration-500`}
			></span>
			<span
				ref={bottomLine}
				className={`bottom-hamburger-line h-[1px] w-0 ${
					dark ? "bg-white" : "bg-[black]"
				} absolute bottom-[3px] left-0 transition-all duration-500`}
			></span>
		</button>
	);
};

export default Hamburger;
