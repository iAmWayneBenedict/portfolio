import gsap from "gsap";
import React from "react";
import { useEffect, useRef } from "react";

const ScrollDown: React.FC = () => {
	const lineCenter = useRef<HTMLSpanElement>(null);
	const dotCenter = useRef<HTMLSpanElement>(null);
	const scrollDownTitle = useRef<HTMLSpanElement>(null);

	const tl = gsap.timeline();

	tl.to(
		lineCenter.current!,
		{
			duration: 0.8,
			top: 0,
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
			<span className="h-[50px] w-[2px] relative overflow-hidden">
				<span
					ref={lineCenter}
					className="line-center animate-scrollLine absolute -top-full left-0 h-full w-[1px] md:w-[2px] bg-black"
				></span>
			</span>

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
