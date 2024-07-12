import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";
import { Helmet } from "react-helmet-async";
import Icon, { icons } from "../utils/Icon";
import { IconContext } from "react-icons";
import { useMediaQuery } from "react-responsive";

const AWARDS_LIST = [
	["CIVIL SERVICE ELIGIBLE (Professional)", 2024],
	["DEAN'S LISTER (4th Year)", 2023],
	["ICT DIAGNOSTIC EXAM PASSER", 2023],
	["1ST INTELLISEVEN CAPTURE THE FLAG WINNER", 2023],
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
				"bg absolute -rotate-6 -top-[150%] -left-[100%] w-[500%] h-[100rem] bg-[black]";
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
	let isMobileView = useMediaQuery({ query: "(max-width: 767px)" });
	return (
		<>
			<Helmet>
				<title>About</title>
				<meta
					name="description"
					content="I am Wayne Benedict Iraola a Fullstack Developer and UX/UI Designer based in Philippines. Likes to explore new possibilities with the emerging technologies, providing digital solutions and outcomes.. Likes to explore new possibilities with the emerging technologies, providing digital solutions and outcomes."
				/>
				<link rel="canonical" href="/about" />
			</Helmet>
			<div className="pt-48 sm:pt-56 2xl:pt-96 pb-10 text-white">
				<div className="px-5 md:px-24 flex flex-col items-end">
					<h1
						ref={title}
						className="overflow-hidden block relative max-w-7xl font-light"
						style={{ fontSize: `clamp(2.75rem, 4.75vw, 6rem)` }}
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
							<div className="text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-normal md:leading-relaxed xl:leading-loose">
								<p>
									I'm Wayne Benedict Iraola a Fullstack Developer and Designer
									from the Philippines. I recently graduate with a degree of
									Bachelor of Science in Information Technology.
								</p>
								<br />
								<p>
									My goal is to help businesses and individuals in providing
									software solutions based on their needs. I have a deep passion
									for creating softwares that is beautiful, responsive, and
									instinctive experience.
								</p>
								<br />
								<p>
									I have experience in developing software solutions both as part
									of a team and as a solo developer. Throughout my Capstone
									Project and Internship, I was responsible for leading a team in
									the development of the overall project and coordinating the
									front-end team to deliver digital outcomes for clients. In
									addition, I mostly work with the front-end side of the system to
									deliver a responsive and user friendly web applications. I also
									have knowledge in creating RESTful APIs, encompassing response
									structures and HTTPS methods. Furthermore, I possess experience
									in the back-end side, utilizing technologies such as Node.js,
									PHP, MySQL, and MongoDB.
								</p>
								<br />
								<p>
									With these projects I have gained new insights in working with
									different roles in software development.
								</p>
							</div>
						</div>
						<div className="flex-1 mt-36 lg:mt-0 flex flex-col items-end justify-center max-w-3xl">
							<span className="text-5xl 2xl:text-6xl text-right font-semibold text-gray-400">
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
						<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl  mb-24 max-w-4xl">
							I actively participate on challenges and improve my skills in every way
							possible
						</p>

						{AWARDS_LIST.map(([name, year], index) => (
							<div
								key={index}
								className={`py-7 2xl:py-10 gap-5 px-5 md:px-10 border-t-[1px] border-t-[#4F4F4F] flex justify-between ${
									AWARDS_LIST.length - 1 === index &&
									"border-b-[1px] border-b-[#4F4F4F]"
								}`}
							>
								<div className="text-lg md:text-xl 2xl:text-2xl">{name}</div>
								<div className="text-xl md:text-2xl 2xl:text-3xl font-semibold">
									{year}
								</div>
							</div>
						))}
					</div>
					<div className="w-full mt-64">
						<p className="text-base lg:text-lg xl:text-xl 2xl:text-2xl  leading-normal md:leading-relaxed text-center">
							Developing web applications using wide array of technologies. I am
							currently learning and exploring other technologies to broaden the
							perspective for software development.
						</p>
					</div>
					<div className="mt-36 flex flex-col items-center">
						<h1 className="text-center font-bold text-xl lg:text-2xl">TECHNOLOGIES</h1>
						<div className="flex flex-wrap max-w-3xl gap-14 justify-center mt-20">
							<IconContext.Provider
								value={{
									size: isMobileView ? "2rem" : "3.5rem",
								}}
							>
								{Object.keys(icons)
									// .filter((key) => key !== "laravel" && key !== "codeigniter")
									.map((key, index) => (
										<Icon key={key} className="flex-1" name={key} />
									))}
							</IconContext.Provider>
						</div>
					</div>
				</div>
				<ContactLayouts />
			</div>
		</>
	);
};

export default About;
