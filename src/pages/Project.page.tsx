import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { CategoryProps, ImageProps, getData } from "../utils/data";
import CustomLink from "../components/ui/CustomLink";
import Title from "../layouts/Project.layouts/Title.layouts";
import data from "../utils/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import { CustomEase } from "gsap/CustomEase";
import { useMediaQuery } from "react-responsive";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";
import { useInView } from "framer-motion";

const Project = () => {
	const location = useLocation();
	const imgCon = useRef<HTMLDivElement>(null);
	const params = useParams();
	const categoryTitle = useRef<HTMLHeadingElement>(null);
	const changeBg = useRef<HTMLDivElement>(null);
	const title = useRef<HTMLHeadingElement>(null);
	const links = useRef<HTMLDivElement>(null);
	const overview = useRef<HTMLParagraphElement>(null);

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);

	useEffect(() => {
		const imgs = imagesLoaded(imgCon.current!);
		let triggered = false;
		imgs.on("done", (e) => {
			triggered = true;
			setAnimation();
		});

		// if (!triggered) setAnimation();

		if (location.pathname.includes("/projects/") || location.pathname.includes("/designs/")) {
			gsap.to(".App", {
				opacity: 1,
				duration: 0,
				delay: 1,
			});
		}

		const tl = gsap.timeline();
		if (title.current!.lastElementChild?.tagName === "IMG") {
			gsap.fromTo(
				title.current!.lastElementChild,
				{
					opacity: 0,
				},
				{
					opacity: 1,
					duration: 0.25,
					delay: 5,
					ease: "power1.inOut",
				}
			);
		}
		tl.fromTo(
			title.current!.firstElementChild!.firstElementChild,
			{
				y: "200%",
				// duration: 0,
			},
			{
				y: "0%",
				duration: 1,
				ease: CustomEase.create(
					"custom",
					"M0,0,C0.084,0.61,0.106,0.822,0.172,0.876,0.248,0.938,0.374,1,1,1"
				),
			},
			"+=2"
		)
			.fromTo(
				[...links!.current!.children],
				{
					opacity: 0,
				},
				{
					opacity: 1,
					stagger: 0.25,
				}
			)
			.fromTo(
				overview.current!,
				{
					opacity: 0,
				},
				{ opacity: 1, duration: 1, delay: 0.25 }
			);

		return () => {
			tl.kill();
			gsap.registerPlugin([]);
		};
	}, [location.pathname]);

	const filteredItem = getData(params.category!, params.name);

	function setAnimation() {
		const images = gsap.utils.toArray("div.project-imgCon, a.project-con");
		gsap.fromTo(
			document.querySelector("div.project-imgCon") as NodeListOf<HTMLElement>[0],
			{
				y: 200,
				opacity: 0,
			},
			{
				y: 0,
				duration: 2.5,
				ease: CustomEase.create(
					"custom",
					"M0,0,C0.084,0.61,0.106,0.822,0.172,0.876,0.248,0.938,0.374,1,1,1"
				),
				opacity: 1,
				delay: 1,
			}
		);
		let delay = 0;
		images.forEach((image, index) => {
			let img = image as HTMLDivElement;
			if (index === 0) return;
			if (index > images.length - 4) delay += 0.2;
			gsap.fromTo(
				img.lastElementChild,
				{
					width: "100%",
				},
				{
					width: 0,
					duration: 2.5,
					delay: delay,
					ease: CustomEase.create(
						"custom",
						"M0,0,C0.084,0.61,0.106,0.822,0.172,0.876,0.248,0.938,0.374,1,1,1"
					),
					scrollTrigger: {
						trigger: img,
					},
				}
			);
		});
	}
	const inView = useInView(changeBg);
	useEffect(() => {
		const bgCon = document.querySelector(".bg-con") as HTMLDivElement;
		const r = changeBg.current?.previousElementSibling as HTMLDivElement;
		const mainBody = imgCon.current as HTMLDivElement;
		bgCon.style.transition = "all 1s ease";
		if (inView) {
			bgCon.style.backgroundColor = "black";
			mainBody.style.opacity = "0";
			r.style.opacity = "0";
		} else {
			mainBody.style.opacity = "1";
			r.style.opacity = "1";
			bgCon.style.backgroundColor = "white";
		}

		return () => {
			bgCon.style.transition = "unset";
			bgCon.style.backgroundColor = "white";
		};
	}, [inView]);

	let isMobileView = useMediaQuery({ query: "(max-width: 480px)" });
	const projects = [...data.projects, ...data.designs];
	const randomProjects = () => {
		let min = 0;
		let max = projects.length - 1;
		let result;
		let projectsTempArr = [];
		let existingProjectsArr: string[] = [];
		while (existingProjectsArr.length < 3) {
			do {
				result = Math.round(Math.random() * (max - min) + min);
			} while (projects[result].URIName === params.name);
			if (existingProjectsArr.includes(projects[result].URIName)) continue;
			existingProjectsArr.push(projects[result].URIName);
			projectsTempArr.push(projects[result]);
		}

		return projectsTempArr;
	};
	return (
		<>
			<div
				ref={imgCon}
				className="w-full px-5 md:px-20 transition-opacity ease duration-1000 overflow-x-hidden"
			>
				<div className="flex flex-col items-center">
					<div className="w-full flex justify-center">
						<Title
							reference={title}
							src={filteredItem[0]?.demoLink || filteredItem[0]?.videoDemo}
						>
							{filteredItem[0]?.name}
						</Title>
					</div>
					<div
						ref={links}
						className="flex gap-4 md:gap-10 mt-4 md:mt-10 text-xs md:text-base"
					>
						<Link
							to={filteredItem[0]?.githubLink || ""}
							target="_blank"
							className="flex gap-0 md:gap-3 items-center"
						>
							{filteredItem[0]?.githubLink && (
								<>
									<img
										src="/assets/ico/github.svg"
										className="scale-75 md:scale-1"
										style={{ filter: "invert(1)" }}
										alt=""
									/>
									<span>Visit Repository</span>
								</>
							)}
						</Link>
						<Link
							to={filteredItem[0]?.dribbleLink || ""}
							target="_blank"
							className="flex gap-0 md:gap-3 items-center"
						>
							{filteredItem[0]?.dribbleLink && (
								<>
									<img
										src="/assets/ico/dribbble 1.svg"
										className="scale-75 md:scale-1"
										style={{ filter: "invert(1)" }}
										alt=""
									/>
									<span>View on Dribble</span>
								</>
							)}
						</Link>
					</div>
					<div className="mt-16 sm:mt-24 2xl:mt-36">
						<p
							ref={overview}
							className="text-center max-w-6xl leading-normal md:leading-relaxed xl:leading-[1.75] text-lg md:text-2xl"
						>
							Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis
							suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis.
							Magnis interdum turpis in nec metus eleifend molestie bibendum.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 mt-10">
						{filteredItem[0]?.images.map((current: ImageProps, index: number) => (
							<div
								className={`${
									index % 3 === 0 && !isMobileView ? "col-span-2" : ""
								} mt-5 2xl:mt-14 h-fit`}
								key={index}
							>
								<div className="group project-imgCon relative w-full h-full max-h-[70rem] overflow-hidden">
									<img
										className="group-hover:scale-[1.05] transition-transform duration-500 ease-out w-full h-full object-cover object-center"
										src={current.image}
										alt=""
									/>
									{index !== 0 && (
										<div className="absolute top-0 right-0 bg-white w-full h-full"></div>
									)}
								</div>
								{index === 0 && (
									<>
										<div className="w-full">
											<div className="mt-14 mb-24 max-w-2xl">
												<h1
													ref={categoryTitle}
													className="text-3xl lg:text-5xl xl:text-7xl font-medium font-neueMontrealRegular"
												>
													<span className="overflow-hidden">
														DEVELOPMENT
													</span>{" "}
													<span className="overflow-hidden">FOR</span>{" "}
													<span className="overflow-hidden">
														COMMUNITY
													</span>
												</h1>
											</div>
										</div>
										<div className="w-full flex justify-end">
											<div className="w-full mb-20 md:mb-0 md:w-1/2 flex justify-center">
												<div className="mt-14 max-w-2xl">
													<h5 className="text-[#4E4E4E] mb-5 text-base">
														THE PROJECT PURPOSE
													</h5>
													<p className="leading-normal lg:leading-8 text-xl md:text-2xl">
														Lorem ipsum dolor sit amet consectetur. Mi
														nec scelerisque et venenatis suspendisse
														vitae velit. Tincidunt sit in eu at bibendum
														elit felis. Magnis interdum turpis in nec
														metus eleifend molestie bibendum.
													</p>
												</div>
											</div>
										</div>
									</>
								)}

								{index !== 0 && index % 3 === 0 && (
									<div className="w-full flex">
										<div className="mt-14 max-w-2xl">
											<h5 className="text-[#4E4E4E] mb-5 text-base">
												KEY FEATURES
											</h5>
											<p className="leading-normal lg:leading-8 text-xl md:text-2xl">
												Lorem ipsum dolor sit amet consectetur. Mi nec
												scelerisque et venenatis suspendisse vitae velit.
												Tincidunt sit in eu at bibendum elit felis. Magnis
												interdum turpis in nec metus eleifend molestie
												bibendum.
											</p>
										</div>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col pt-12">
				<div className="px-5 md:px-20 mt-14 max-w-2xl transition-opacity ease duration-1000">
					<h5 className="text-[#4E4E4E] mb-5 text-base">ROLES AND RESPONSIBILITIES</h5>
					<p className="leading-normal lg:leading-8 text-xl md:text-2xl text-[black]">
						Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis
						suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis. Magnis
						interdum turpis in nec metus eleifend molestie bibendum.
					</p>
				</div>
				<div className="mt-96" ref={changeBg}>
					<div className="text-white px-5 md:px-24 mb-56 lg:mb-96">
						<h1 className="text-6xl">MORE WORKS.</h1>
						<div className="flex flex-col lg:flex-row gap-20 lg:gap-10 mt-24">
							{randomProjects().map((project, index) => {
								if (index > 2) return <></>;
								return (
									<CustomLink
										className="project-con relative overflow-hidden"
										to={`/${project.categoryType}/${project.URIName}`}
										key={index}
									>
										<div>
											<img src={project.thumbnail} alt="" />
										</div>
										<div>
											<h5 className="pt-6 text-[#9e9e9e] pb-0 md:pb-1 text-sm md:text-base">
												{project.type}
											</h5>
											<h1 className="text-2xl md:text-3xl">{project.name}</h1>
										</div>
										<div className="absolute top-0 right-0 w-full h-full bg-[black]"></div>
									</CustomLink>
								);
							})}
						</div>
					</div>
					<ContactLayouts classes="bg-transparent text-white" />
				</div>
			</div>
		</>
	);
};

export default Project;
