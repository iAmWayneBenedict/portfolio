import gsap from "gsap";
import React from "react";
import { useEffect, useRef } from "react";

const ScrollDown = () => {
	const lineCenter = useRef<HTMLSpanElement>(null);
	const dotCenter = useRef<HTMLSpanElement>(null);
	const scrollDownTitle = useRef<HTMLSpanElement>(null);

	gsap.timeline()
		.to(
			".line-center",
			{
				duration: 0.8,
				height: "50px",
				ease: "Power3.easeOut",
			},
			"+=3"
		)
		.to(".dot-center", {
			duration: 1.5,
			opacity: 1,
			y: 0,
		})
		.to(".scroll-down-title", {
			duration: 1,
			opacity: 0.7,
			y: 0,
			ease: "Power3.easeOut",
		});
	return (
		<div className="flex flex-col items-center my-20">
			<span ref={lineCenter} className="line-center h-0 w-[1px] md:w-[2px] bg-black"></span>
			<span
				ref={dotCenter}
				className="dot-center -translate-y-7 opacity-0 h-[2px] md:h-[4px] w-[2px] md:w-[4px] bg-black mt-5 rounded-full"
			></span>
			<span
				ref={scrollDownTitle}
				className="scroll-down-title opacity-0 -translate-y-5 mt-10 cursor-pointer"
			>
				Scroll Down
			</span>
		</div>
	);
};

export default ScrollDown;
