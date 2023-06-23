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
	const menuLinkText = useRef<HTMLAnchorElement>(null);

	// const h1 = new SplitType(menuLinkText.current!);

	let tl = gsap.timeline();
	useEffect(() => {
		const closeMenu = document.querySelector(".close-menu-btn") as HTMLButtonElement;

		menuLinkText.current!.addEventListener("click", () => {
			closeMenu.click();
		});
	});

	return (
		<Link
			to={href}
			ref={menuLinkText}
			className="menu-link-text text-4xl xl:text-6xl 2xl:text-8xl translate-y-10 opacity-0"
		>
			{text}
		</Link>
	);
};

export default MenuLink;
