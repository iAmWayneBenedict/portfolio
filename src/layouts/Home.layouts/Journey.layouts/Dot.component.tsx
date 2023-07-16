import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useEffect, useRef } from "react";
import SplitType from "split-type";

const Dot: React.FC = () => {
	gsap.registerPlugin(ScrollTrigger);

	const heroCon = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const dotCon = Array.from(document.querySelectorAll(".dot-con"));

		dotCon.forEach((el) => {
			let dText = el.querySelector(".dot-text")! as HTMLSpanElement;
			let dotText = new SplitType(dText);

			gsap.to(el, {
				duration: 1,
				border: "2px solid black",
				width: "35px",
				height: "35px",

				scrollTrigger: {
					trigger: el,
					start: "center center",
					toggleActions: "restart none none reverse",
				},
			});

			gsap.to(dotText.chars, {
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: 0.1,

				scrollTrigger: {
					trigger: el,
					start: "center center",
					toggleActions: "restart none none reverse",
				},
			});
		});

		let ctx = gsap.context(() => {
			gsap.to(heroCon.current, {
				height: "12%",

				scrollTrigger: {
					trigger: heroCon.current!.parentElement,
					start: "top center",
					endTrigger: dotCon[0],
					end: "center center",
					scrub: 2,
					id: "first",
					immediateRender: false,
					onToggle: () => {
						console.log(123);
					},
				},
			});

			gsap.to(heroCon.current, {
				height: "37%",

				scrollTrigger: {
					trigger: dotCon[0],
					start: "center center",
					endTrigger: dotCon[1],
					end: "center center",
					scrub: 2,
					id: "second",
					immediateRender: false,
				},
			});

			gsap.to(heroCon.current, {
				height: "62%",

				scrollTrigger: {
					trigger: dotCon[1],
					start: "center center",
					endTrigger: dotCon[2],
					end: "center center",
					scrub: 2,
					id: "third",
					immediateRender: false,
				},
			});

			gsap.to(heroCon.current, {
				height: "87%",

				scrollTrigger: {
					trigger: dotCon[2],
					start: "center center",
					endTrigger: dotCon[3],
					end: "center center",
					scrub: 2,
					id: "fourth",
					immediateRender: false,
				},
			});

			gsap.to(heroCon.current, {
				height: "100%",

				scrollTrigger: {
					trigger: dotCon[3],
					start: "center center",
					end: "+=100%",
					scrub: 1,
					id: "last",
					immediateRender: false,
				},
			});
		});
		return () => ctx.revert();
	}, []);

	return (
		<>
			<div
				ref={heroCon}
				className="line-journey w-[5px] h-0 bg-[black] rounded-lg flex flex-col justify-evenly"
			></div>
			{[
				["01", "top-[10%]"],
				["02", "top-[35%]"],
				["03", "top-[60%]"],
				["04", "top-[85%]"],
			].map(([number, position]) => {
				return (
					<div
						key={number}
						className={`dot-con w-[25px] h-[25px] bg-white border-[14px] border-[black] absolute rounded-full left-20 lg:left-1/2 -translate-x-1/2 ${position} flex justify-center items-center`}
					>
						<span className="text-lg dot-text rounded-full overflow-hidden">
							{number}
						</span>
					</div>
				);
			})}
		</>
	);
};

export default Dot;
