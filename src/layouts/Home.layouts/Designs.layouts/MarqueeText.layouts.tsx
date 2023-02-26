import React, { useRef } from "react";
import { useEffect } from "react";

const MarqueeText = () => {
	const marquee = useRef<HTMLParagraphElement>(null);
	// 	useEffect(() => {
	// 		// Variables
	// 		// const el = document.querySelector(".marquee-title")! as HTMLParagraphElement;
	// 		const el = document.querySelector(".marquee-container")! as HTMLElement;
	// 		// console.log(el);
	// 		// Variables ~ Widths
	// 		let elWidth = marquee.current!.offsetWidth;
	// 		let windowWidth = window.innerWidth;

	// 		// Variables ~ Mouse
	// 		let mouseX = 0;
	// 		let prevMouseX = 0;

	// 		// Target: value we want to animate to
	// 		let skewTarget = 0;
	// 		let translateTarget = 0;

	// 		// WithEasing: value we use to animate
	// 		let skewWithEasing = 0;
	// 		let translateWithEasing = 0;

	// 		// EasingFactor: determines how quick the animation/interpolation goes
	// 		let skewEasingFactor = 0.1;
	// 		let translateEasingFactor = 0.05;

	// 		// Events
	// 		el.addEventListener("mousemove", handleMouseMove);
	// 		window.addEventListener("resize", handleWindowResize);

	// 		// Functions
	// 		function handleMouseMove(e: { pageX: number }) {
	// 			mouseX = e.pageX;
	// 		}

	// 		function handleWindowResize(e: any) {
	// 			elWidth = marquee.current!.offsetWidth;
	// 			windowWidth = window.innerWidth;
	// 		}

	// 		function lerp(start: number, end: number, factor: number) {
	// 			return (1 - factor) * start + factor * end;
	// 		}

	// 		function animateMe() {
	// 			// Get difference between current and previous mouse position
	// 			skewTarget = mouseX - prevMouseX;
	// 			prevMouseX = mouseX;

	// 			// Calc how much we need to translate our el
	// 			translateTarget = ((elWidth - windowWidth) / windowWidth) * mouseX * -10;

	// 			// Ease between start and target values (skew)
	// 			skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);

	// 			// Limit our skew to a range of 75 degrees so it doesn't "over-skew"
	// 			skewWithEasing = Math.min(Math.max(skewWithEasing, -40), 40);

	// 			// Ease between start and target values (translate)
	// 			translateWithEasing = lerp(translateWithEasing, translateTarget, translateEasingFactor);

	// 			marquee.current!.style.transform = `
	//     translateX(${translateWithEasing}px)
	//     skewX(${skewWithEasing}deg)
	//   `;

	// 			// RAF
	// 			window.requestAnimationFrame(animateMe);
	// 		}

	// 		window.requestAnimationFrame(animateMe);
	// 	}, []);
	return (
		<p
			ref={marquee}
			className="marquee-title relative text-[#99948d] inline-block m-0 will-change-transform"
		>
			<span className="mx-8">&#x2022; WAYNE &#x2022;</span>
			<span className="mx-8">&#x2022; WAYNE &#x2022;</span>
			<span className="mx-8">&#x2022; WAYNE &#x2022;</span>
			<span className="mx-8">&#x2022; WAYNE &#x2022;</span>
			<span className="mx-8">&#x2022; WAYNE &#x2022;</span>
		</p>
	);
};

export default MarqueeText;
