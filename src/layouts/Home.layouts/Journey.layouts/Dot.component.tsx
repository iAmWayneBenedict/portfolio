import gsap from "gsap";
import gsapCore from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

interface Props {
	number: string;
	y_position: string;
	isActive?: boolean;
}

// REDUCE BORDER SIZE TO REVEAL NUMBER

const Dot: React.FC<Props> = ({ number, y_position, isActive = false }) => {
	const dotCon = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(ScrollTrigger);

	let dotText = new SplitType(".dot-text");

	gsap.to(dotCon.current!, {
		duration: 1,
		border: "2px solid black",
		width: "35px",
		height: "35px",

		scrollTrigger: {
			trigger: dotCon.current!,
			start: "top bottom",
			toggleActions: "restart none none none",
		},
	});

	gsap.fromTo(
		dotText.chars,
		{ opacity: 0 },
		{
			y: 0,
			opacity: 1,
			stagger: 0.05,
			delay: 0.2,
			duration: 0.1,

			scrollTrigger: {
				trigger: dotCon.current!,
				start: "top bottom",
				toggleActions: "restart none none none",
			},
		}
	);

	useEffect(() => {
		if (!dotCon.current) return;

		// if (isActive) {
		// 	dotCon.current.classList.remove("w-[25px]");
		// 	dotCon.current.classList.remove("h-[25px]");
		// 	dotCon.current.classList.remove("border-[14px]");
		// 	dotCon.current.classList.add("border-[2px]");
		// 	dotCon.current.classList.add("w-[35px]");
		// 	dotCon.current.classList.add("h-[35px]");

		// 	return;
		// }

		// dotCon.current.classList.add("w-[25px]");
		// dotCon.current.classList.add("h-[25px]");
		// dotCon.current.classList.add("border-[14px]");
		// dotCon.current.classList.remove("border-[2px]");
		// dotCon.current.classList.remove("w-[35px]");
		// dotCon.current.classList.remove("h-[35px]");
	}, [isActive]);

	return (
		<div
			ref={dotCon}
			className={`w-[25px] h-[25px] bg-white border-[14px] border-black absolute rounded-full left-1/2 -translate-x-1/2 ${y_position} flex justify-center items-center`}
		>
			<span className="text-lg dot-text overflow-hidden">{number}</span>
		</div>
	);
};

export default Dot;
