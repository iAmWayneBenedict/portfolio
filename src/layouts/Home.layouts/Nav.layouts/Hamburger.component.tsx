import gsap from "gsap";
import React, { useRef } from "react";
import { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

interface Props {
	delay: string | undefined;
	handleNavbar: (
		isActive: boolean,
		setActive: React.Dispatch<React.SetStateAction<boolean>>
	) => void;
}

const Hamburger: React.FC<Props> = ({ delay, handleNavbar }) => {
	const topLine = useRef<HTMLSpanElement>(null);
	const bottomLine = useRef<HTMLSpanElement>(null);

	const [active, setActive] = useState<boolean>(false);
	const [onMount, setOnMount] = useState<boolean>(true);

	const location = useLocation();

	useEffect(() => {
		if (onMount) return;
		handleNavbar(active, setActive);
	}, [active]);

	let handleClick = (event: React.MouseEvent) => {
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

		setOnMount(false);
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
			onClick={(e) => handleClick(e)}
			onMouseOver={(e) => handleMouseOver(e)}
			onMouseLeave={(e) => handleMouseLeave(e)}
			className="hamburger h-[20px] w-[40px] transition-all opacity-100 relative justify-end order-3 ml-5 z-[100]"
		>
			<span
				ref={topLine}
				className="top-hamburger-line h-[1px] w-0 bg-black absolute top-[3px] left-0 transition-all duration-500"
			></span>
			<span
				ref={bottomLine}
				className="bottom-hamburger-line h-[1px] w-0 bg-black absolute bottom-[3px] left-0 transition-all duration-500"
			></span>
		</button>
	);
};

export default Hamburger;
