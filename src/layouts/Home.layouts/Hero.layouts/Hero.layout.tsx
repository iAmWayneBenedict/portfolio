import gsap from "gsap";
import React from "react";
import ScrollDown from "./ScrollDown.component";
import SplitType from "split-type";

const Hero = () => {
	const text = new SplitType("#hero-1");
	const text1 = new SplitType("#hero-2");
	const text2 = new SplitType("#hero-3");
	const text3 = new SplitType("#hero-4");

	gsap.timeline()
		.to(
			text.chars,
			{
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: 0.1,
			},
			"+=.5"
		)
		.to(
			text1.chars,
			{
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: 0.1,
			},
			"-=1"
		)
		.to(
			text2.chars,
			{
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: 0.1,
			},
			"-=.9"
		)
		.to(
			text3.chars,
			{
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: 0.1,
			},
			"-=.8"
		);
	return (
		<div>
			<div className="flex flex-col gap-5 items-center text-[25px] sm:text-[42px] md:text-5xl lg:text-6xl xl:text-[90px] justify-end h-[50vh] sm:h-[50vh] xl:h-[65vh] leading-tight pointer-events-none">
				<span id="hero-1" className="overflow-x-hidden overflow-y-hidden">
					HI, I’M WAYNE
				</span>
				<span id="hero-2" className="overflow-x-hidden overflow-y-hidden">
					A FULLSTACK DEVELOPER
				</span>
				<span id="hero-3" className="overflow-x-hidden overflow-y-hidden">
					THAT CAN MAKE YOUR IDEAS
				</span>
				<span id="hero-4" className="overflow-x-hidden overflow-y-hidden">
					INTO REALITY
				</span>
			</div>
			<ScrollDown />
		</div>
	);
};

export default Hero;
