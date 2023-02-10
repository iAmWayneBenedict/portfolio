import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";

interface Props {
	useReference: React.RefObject<HTMLDivElement>;
}

const Menu: React.FC<Props> = ({ useReference }) => {
	gsap.registerPlugin(ScrollTrigger);

	const tl = gsap.timeline();

	tl.to(".menu-con", {
		duration: 0.2,
		autoAlpha: 1,
	});

	return (
		<div
			ref={useReference}
			className="menu-con fixed invisible top-0 left-0 w-screen h-screen bg-white z-50"
		>
			hkabsd
		</div>
	);
};

export default Menu;
