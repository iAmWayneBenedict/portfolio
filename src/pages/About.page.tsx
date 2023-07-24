import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";
import { Helmet } from "react-helmet-async";

const AWARDS_LIST = [
	["DEAN'S LISTER (4th Year)", 2023],
	["ICT DIAGNOSTIC EXAM PASSER", 2023],
	["1ST INTELLISEVEN HACKATHON AWARD", 2023],
	["PYTHON PROGRAMMING ESSENTIAL COURSE", 2023],
	["DATA SCIENCE DISCOVERY", 2023],
	["INTRO TO GAME DEVELOPMENT AND CAREER OPPOTUNITIES", 2023],
	["CIVIL SERVICE ELIGIBLE (Sub-Professional)", 2022],
	["GOOGLE TECHNICAL SUPPORT FUNDAMENTALS", 2022],
	["3RD PLACER ROBOCODE CCS SKILLS COMPETITION", 2021],
	["1ST PLACER WEB DESIGN CCS SKILLS COMPETITION", 2020],
];

const About = () => {
	gsap.registerPlugin(ScrollTrigger);
	const title = useRef<HTMLHeadingElement>(null);
	const body = useRef<HTMLDivElement>(null);
	const formCon = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const bgCon = document.querySelector(".bg-con") as HTMLElement;
		const nav = document.querySelector("nav") as HTMLElement;

		bgCon.style.background = "black";
		gsap.fromTo(
			bgCon,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.75,
			}
		);
		gsap.fromTo(
			nav,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.75,
			}
		);

		return () => {
			bgCon.style.background = "white";
		};
	}, []);
	useEffect(() => {
		const titleComponents = new SplitType(".title-text");
		titleComponents.lines?.forEach((el) => {
			const span = document.createElement("span");
			el.classList.add("relative");
			el.classList.add("overflow-hidden");
			span.className =
				"bg absolute -rotate-6 -top-[120%] -left-[100%] w-[500%] h-[100rem] bg-[black]";
			el.appendChild(span);
		});
		const bgs = gsap.utils.toArray(titleComponents.lines!.map((el) => el.lastElementChild));
		gsap.to(".App", {
			opacity: 1,
			duration: 0,
		});
		gsap.to(titleComponents.chars, {
			y: 0,
			duration: 0,
		});
		gsap.timeline()
			.fromTo(
				titleComponents.lines,
				{
					y: 100,
					duration: 0,
					rotate: -2,
				},
				{
					y: 0,
					stagger: 0.1,
					duration: 1.25,
					rotate: 0,
					delay: 2,
				}
			)
			.fromTo(
				title.current!.nextElementSibling,
				{
					opacity: 0,
				},
				{ opacity: 1, duration: 0.5 }
			)
			.fromTo(
				body.current!,
				{
					opacity: 0,
				},
				{ opacity: 1, duration: 0.5 }
			);
		bgs.forEach((el) => {
			gsap.to(el as HTMLElement, {
				top: "300%",
				duration: 1.75,
				stagger: 0.1,
				delay: 2,
			});
		});
	}, []);

	return (
		<>
			<Helmet>
				<title>About</title>
				<meta
					name="description"
					content="I am Wayne a Fullstack Developer and UX/UI Designer based in Philippines. Likes to experiment with new techniques and mess around with emerging technologies."
				/>
				<link rel="canonical" href="/about" />
			</Helmet>
			<div className="pt-48 sm:pt-56 2xl:pt-96 pb-10 text-white">
				<div className="px-5 md:px-24 flex flex-col items-end">
					<h1
						ref={title}
						className="overflow-hidden block relative max-w-7xl font-light"
						style={{ fontSize: `clamp(2.75rem, 6vw, 6rem)` }}
					>
						<p className="title-text text-right">
							Developing extraordinary digital outcomes, today and for the years
							ahead.
						</p>
					</h1>
				</div>
				<div ref={body} className="px-5 md:px-24 ">
					<div className="w-full flex flex-col lg:flex-row justify-between gap-10 py-64">
						<div className="flex-1 max-w-4xl">
							<p className="text-lg lg:text-2xl leading-normal md:leading-relaxed xl:leading-loose">
								I have worked and collaborated with startups, industry leaders and
								global brands including Veolia, USN, goHenry, ChargeNow by BMW and
								Holiday Extras. I am currently working at Bark as Lead Product
								Designer.
							</p>
						</div>
						<div className="flex-1 mt-36 lg:mt-0 flex flex-col items-end max-w-3xl">
							<span className="text-5xl md:text-6xl text-right font-semibold text-gray-400">
								<span className="font-cinzel">“</span>Make it simple, but
								significant. <span className="font-cinzel">”</span>
							</span>
							<i className="text-right mt-10 text-lg">— Don Draper, Mad Men</i>
						</div>
					</div>
					<div className="mt-24">
						<h1 className="text-4xl lg:text-6xl font-semibold mb-14 leading-snug">
							AWARDS AND <br /> CERTIFICATIONS
						</h1>
						<p className="text-lg md:text-xl mb-24 max-w-4xl">
							I have worked and collaborated with startups, industry leaders and
							global brands including Veolia, USN, goHenry, ChargeNow by BMW and
							Holiday Extras. I am currently working at Bark as Lead Product Designer.
						</p>

						{AWARDS_LIST.map(([name, year], index) => (
							<div
								className={`py-10 gap-5 px-5 md:px-10 border-t-[1px] border-t-[#4F4F4F] flex justify-between ${
									AWARDS_LIST.length - 1 === index &&
									"border-b-[1px] border-b-[#4F4F4F]"
								}`}
							>
								<div className="text-lg md:text-2xl">{name}</div>
								<div className="text-xl md:text-3xl font-semibold">{year}</div>
							</div>
						))}
					</div>
					<div className="w-full mt-64">
						<p className="text-lg md:text-2xl leading-normal md:leading-relaxed text-center">
							I have worked and collaborated with startups, industry leaders and
							global brands including Veolia, USN, goHenry, ChargeNow by BMW and
							Holiday Extras. I am currently working at Bark as Lead Product Designer.
						</p>
					</div>
					<div className="mt-36 flex flex-col items-center">
						<h1 className="text-center font-bold text-xl lg:text-2xl">TECHNOLOGIES</h1>
						<div className="flex flex-wrap max-w-3xl gap-14 justify-center mt-20">
							{[
								"/assets/ico/react%201.svg",
								"/assets/ico/express.svg",
								"/assets/ico/nodejs%201.svg",
								"/assets/ico/typescript.svg",
								"/assets/ico/sass.svg",
								"/assets/ico/tailwind-css.svg",
								"/assets/ico/bootstrap.svg",
								"/assets/ico/html5.svg",
								"/assets/ico/css3.svg",
								"/assets/ico/figma-logo.svg",
								"/assets/ico/npm.svg",
								"/assets/ico/postman.svg",
								"/assets/ico/git(1).svg",
								"/assets/ico/mysql.svg",
								"/assets/ico/java-script.svg",
								"/assets/ico/php.svg",
							].map((src, index) => (
								<img
									key={index}
									src={src}
									className="w-12 lg:w-20"
									style={{ filter: "invert(1)" }}
									alt=""
								/>
							))}
						</div>
					</div>
				</div>
				<ContactLayouts />
			</div>
		</>
	);
};

export default About;
