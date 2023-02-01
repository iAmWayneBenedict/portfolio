import React from "react";
import Line from "../../../components/ui/Line.component";
import Title from "../../../components/ui/Title.component";
import Dot from "./Dot.component";
import TimelineEvent from "./TimelineEvent.component";
import { useRef, useEffect } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Journey = () => {
	gsap.registerPlugin(ScrollTrigger);

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
					toggleActions: "restart reset none none",
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
					toggleActions: "restart none none none",
				},
			});
		});
	}, []);

	return (
		<div className="mt-96 tracking-wide ">
			<div>
				<div className="relative px-5 md:px-20">
					<Title name="journey" />
				</div>
			</div>
			<div className="mt-72 flex flex-col">
				<div className="flex justify-center">
					<h4 className="text-lg">
						Take a single step at a time. Make it short yet fulfilling.
					</h4>
				</div>
				<div className="h-[45rem] flex mt-32 gap-10 relative">
					<div className="basis-[49%] flex flex-col">
						<TimelineEvent position="left" isEmpty={true} />
						<TimelineEvent
							position="left"
							isEmpty={false}
							data={{ year: "2017", desc: "Lorem ipsum dolor sit amet." }}
						/>
						<TimelineEvent position="left" isEmpty={true} />
						<TimelineEvent
							position="left"
							isEmpty={false}
							data={{ year: "PRESENT", desc: "Lorem ipsum dolor sit amet." }}
						/>
					</div>
					<div className="w-[5px] h-full bg-black rounded-lg flex flex-col justify-evenly"></div>
					{[
						["01", "top-[10%]"],
						["02", "top-[35%]"],
						["03", "top-[60%]"],
						["04", "top-[85%]"],
					].map((n) => {
						let [number, position] = n;

						return (
							<div
								key={number}
								className={`dot-con w-[25px] h-[25px] bg-white border-[14px] border-black absolute rounded-full left-1/2 -translate-x-1/2 ${position} flex justify-center items-center`}
							>
								<span className="text-lg dot-text overflow-hidden">{number}</span>
							</div>
						);
					})}
					<div className="basis-[49%] flex flex-col">
						<TimelineEvent
							position="right"
							isEmpty={false}
							data={{ year: "2013", desc: "Lorem ipsum dolor sit amet." }}
						/>
						<TimelineEvent position="right" isEmpty={true} />
						<TimelineEvent
							position="right"
							isEmpty={false}
							data={{ year: "2019", desc: "Lorem ipsum dolor sit amet." }}
						/>
						<TimelineEvent position="right" isEmpty={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Journey;
