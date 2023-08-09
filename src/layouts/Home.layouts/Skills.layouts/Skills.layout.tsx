import React from "react";
import Title from "../../../components/ui/Title.component";
import Card from "./Card.component";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { isMobile } from "react-device-detect";

const SKILLS_LIST = [
	{
		name: "Web development",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!",
	},
	{
		name: "UI Design",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!",
	},
	{
		name: "RESTful API Development",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!",
	},
	{
		name: "Web Scraping",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!",
	},
];

const Skills = () => {
	gsap.registerPlugin(ScrollTrigger);
	const skillOpening = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isMobile) return;
		gsap.to(skillOpening.current!.firstElementChild!.firstElementChild, {
			paddingRight: "10vw",
			scrollTrigger: {
				trigger: skillOpening.current,
				start: "top bottom",
				toggleActions: "restart none none reset",
			},
		});
		gsap.to(skillOpening.current!.lastElementChild!.lastElementChild, {
			paddingLeft: "10vw",
			scrollTrigger: {
				trigger: skillOpening.current,
				start: "top bottom",
				toggleActions: "restart none none reset",
			},
		});
	}, []);

	return (
		<>
			<div className="mt-48 mx-5 md:mx-20 tracking-wide">
				<div className="gap-10 flex flex-col" ref={skillOpening}>
					<div
						className="flex gap-10 md:gap-0 flex-col md:flex-row font-light"
						style={{ fontSize: "clamp(2.5rem, 10vw, 11rem)" }}
					>
						<h3 className="text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] pr-[.5vw] flex">
							<span
								className="font-normal md:font-medium order-2 md:order-1"
								style={{ fontSize: "clamp(.75rem, 2vw, 1rem)" }}
							>
								01
							</span>
							<span className="order-1 md:order-2">THINK.</span>
						</h3>
						<h3 className="text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] flex">
							<span
								className="font-normal md:font-medium order-2 md:order-1"
								style={{ fontSize: "clamp(.75rem, 2vw, 1rem)" }}
							>
								02
							</span>
							<span className="order-1 md:order-2">HELP.</span>
						</h3>
					</div>
					<div
						className="flex gap-10 md:gap-0  font-light justify-end flex-col md:flex-row"
						style={{ fontSize: "clamp(2.5rem, 10vw, 11rem)" }}
					>
						<h3 className="text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] flex">
							<span
								className="font-normal md:font-medium order-2 md:order-1"
								style={{ fontSize: "clamp(.75rem, 2vw, 1rem)" }}
							>
								03
							</span>
							<span className="order-1 md:order-2">DESIGN.</span>
						</h3>
						<h3 className="text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] pl-[.5vw] flex">
							<span
								className="font-normal md:font-medium order-2 md:order-1"
								style={{ fontSize: "clamp(.75rem, 2vw, 1rem)" }}
							>
								04
							</span>
							<span className="order-1 md:order-2">SOLVE.</span>
						</h3>
					</div>
				</div>
			</div>
			<div className="mt-64">
				<div className="border-y-black border-y-[1px]">
					<div className="mx-5 md:mx-20 py-14 lg:py-20">
						<h4
							className="max-w-4xl mb-20 lg:mb-28 md:mb-40"
							style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)" }}
						>
							SERVICES OFFERED FOR YOUR BUSINESS NEEDS
						</h4>
						<div className="flex flex-col gap-20 skills">
							{SKILLS_LIST.map((el, index) => (
								<div className="flex flex-col items-end" key={index}>
									<h5 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-semibold text-[#444444]">
										0{index + 1}.
									</h5>
									<div className="w-full flex flex-col gap-2 2xl:gap-5 pb-10 relative overflow-hidden">
										<h5 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium">
											{el.name}
										</h5>
										<p className="text-sm md:text-base">{el.description}</p>
										{index != SKILLS_LIST.length - 1 && (
											<div className="absolute bottom-0 left-0 bg-black content-[''] w-full h-[1px]"></div>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
