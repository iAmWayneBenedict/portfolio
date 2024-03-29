import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Skill from "./Skill.layouts";
import { useMediaQuery } from "react-responsive";

const SKILLS_LIST = [
	{
		name: "Web Development",
		description: "Develop static and dynamic web-applications",
	},
	{
		name: "UI Design",
		description:
			"Capable of crafting both low and high fidelity wireframes to provide prototype for your application",
	},
	{
		name: "RESTful API Development",
		description: "Bridging the gap between your front-end and back-end",
	},
	{
		name: "Web Scraping",
		description:
			"Scraping your needed data from different sources and process it based on your needs",
	},
];

const Skills = () => {
	gsap.registerPlugin(ScrollTrigger);
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const skillOpening = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (isTabletOrMobile) return;
		gsap.to(skillOpening.current!.firstElementChild!.firstElementChild, {
			paddingRight: "10vw",
			duration: 0.5,
			scrollTrigger: {
				trigger: skillOpening.current,
				start: "top bottom",
			},
		});
		gsap.to(skillOpening.current!.lastElementChild!.lastElementChild, {
			paddingLeft: "10vw",
			duration: 0.5,
			scrollTrigger: {
				trigger: skillOpening.current,
				start: "top bottom",
			},
		});
	}, []);

	return (
		<>
			{!isTabletOrMobile && (
				<div className="mt-48 mx-5 md:mx-20 tracking-wide">
					<div className="gap-10 flex flex-col" ref={skillOpening}>
						<div
							className="flex gap-10 md:gap-0 flex-col md:flex-row font-light"
							style={{ fontSize: "clamp(2.5rem, 10vw, 11rem)" }}
						>
							<div className="text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] pr-[.5vw] flex">
								<span
									className="font-normal md:font-medium order-2 md:order-1"
									style={{ fontSize: "clamp(.75rem, 2vw, 1rem)" }}
								>
									01
								</span>
								<span className="order-1 md:order-2">THINK.</span>
							</div>
							<div className="text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] flex">
								<span
									className="font-normal md:font-medium order-2 md:order-1"
									style={{ fontSize: "clamp(.75rem, 2vw, 1rem)" }}
								>
									02
								</span>
								<span className="order-1 md:order-2">PLAN.</span>
							</div>
						</div>
						<div
							className="flex gap-10 md:gap-0  font-light justify-end flex-col md:flex-row"
							style={{ fontSize: "clamp(2.5rem, 10vw, 11rem)" }}
						>
							<div className="text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] flex">
								<span
									className="font-normal md:font-medium order-2 md:order-1"
									style={{ fontSize: "clamp(.75rem, 2vw, 1rem)" }}
								>
									03
								</span>
								<span className="order-1 md:order-2">DESIGN.</span>
							</div>
							<div className="text-6xl lg:text-8xl xl:text-[8rem] 2xl:text-[10rem] pl-[.5vw] flex">
								<span
									className="font-normal md:font-medium order-2 md:order-1"
									style={{ fontSize: "clamp(.75rem, 2vw, 1rem)" }}
								>
									04
								</span>
								<span className="order-1 md:order-2">SOLVE.</span>
							</div>
						</div>
					</div>
				</div>
			)}
			<div className="mt-64">
				<div className="border-y-black border-y-[1px]">
					<div className="mx-5 md:mx-20 py-14 lg:py-20">
						<p
							className="max-w-4xl mb-20 lg:mb-28 md:mb-40"
							style={{ fontSize: "clamp(1.4rem, 5vw, 3.5rem)" }}
						>
							SERVICES OFFERED FOR YOUR BUSINESS NEEDS
						</p>
						<div className="flex flex-col gap-14 md:gap-20 skills">
							{SKILLS_LIST.map((el, index) => (
								<Skill
									key={index}
									el={el}
									index={index}
									SKILLS_LIST={SKILLS_LIST}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Skills;
