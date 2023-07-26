import React from "react";
import { useRef, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { Link } from "react-router-dom";

interface Props {
	text: string;
	href?: string;
}

const MenuLink: React.FC<Props> = ({ text, href = "#" }) => {
	const menuText = useRef<HTMLDivElement>(null);

	// const spanText = new SplitType(menuText.current!);

	let tl = gsap.timeline();
	useEffect(() => {
		const closeMenu = document.querySelector(".close-menu-btn") as HTMLButtonElement;

		menuText.current!.addEventListener("click", () => {
			closeMenu.click();
		});
	}, []);

	return (
		<Link
			to={href}
			className="menu-link-text text-4xl md:text-5xl xl:text-6xl 2xl:text-8xl w-fit overflow-hidden py-3"
		>
			<div ref={menuText} className="menu-text translate-y-40 opacity-0">
				<span className="transition-opacity duration-500 ease-out">{text}</span>
			</div>
		</Link>
	);
};

export default MenuLink;
