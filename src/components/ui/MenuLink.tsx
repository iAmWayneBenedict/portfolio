import React from "react";
import { useRef, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { Link, useLocation } from "react-router-dom";

interface Props {
	text: string;
	href?: string;
}

const MenuLink: React.FC<Props> = ({ text, href = "#" }) => {
	const menuText = useRef<HTMLDivElement>(null);
	const location = useLocation();
	let clicked = false;

	// const spanText = new SplitType(menuText.current!);

	let tl = gsap.timeline();
	useEffect(() => {
		const closeMenu = document.querySelector(".hamburger") as HTMLButtonElement;

		menuText.current!.addEventListener("click", (event) => {
			// console.log(clicked);
			// if (clicked) return;
			clicked = true;
			closeMenu.click();
		});

		return () => {
			clicked = false;
		};
	}, [location]);

	return (
		<Link
			to={href}
			className="menu-link-text text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl w-fit overflow-hidden"
		>
			<div ref={menuText} className="menu-text translate-y-40 opacity-0">
				<span className="transition-opacity duration-700 ease-in-out">{text}</span>
			</div>
		</Link>
	);
};

export default MenuLink;
