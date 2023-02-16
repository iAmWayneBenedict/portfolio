import React from "react";
import { useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

interface Props {
	text: String;
}

const MenuLink: React.FC<Props> = ({ text }) => {
	const menuLinkText = useRef<HTMLHeadingElement>(null);

	// const h1 = new SplitType(menuLinkText.current!);

	let tl = gsap.timeline();

	return (
		<h1 ref={menuLinkText} className="menu-link-text text-8xl translate-y-10 opacity-0">
			{text}
		</h1>
	);
};

export default MenuLink;
