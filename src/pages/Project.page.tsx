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
import { Helmet } from "react-helmet-async";
import parse from "html-react-parser";
import Icon from "../utils/Icon";
import { IconContext } from "react-icons";

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

	function initImages(images: unknown[], value: number) {
		images.forEach((el) => {
			const div = el as HTMLDivElement;
			const self = div.firstElementChild as HTMLImageElement;
			gsap.to(self, {
				opacity: value,
				duration: 0,
			});
		});
	}

	useEffect(() => {
		const imgs = imagesLoaded(imgCon.current!);
		const images = gsap.utils.toArray("div.project-imgCon, a.project-con");
		initImages(images, 0);
		let triggered = false;
		imgs.on("done", (e) => {
			triggered = true;
			initImages(images, 1);
			setAnimation(images);
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
				links.current!.nextElementSibling,
				{
					opacity: 0,
				},
				{
					opacity: 1,
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

	function setAnimation(images: unknown[]) {
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
			if (r) r.style.opacity = "0";
		} else {
			mainBody.style.opacity = "1";
			if (r) r.style.opacity = "1";
			bgCon.style.backgroundColor = "white";
		}

		return () => {
			bgCon.style.transition = "unset";
			bgCon.style.backgroundColor = "white";
		};
	}, [inView]);

	let isMobileView = useMediaQuery({ query: "(max-width: 767px)" });
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
			<Helmet>
				<title>{filteredItem[0]?.name}</title>
				<meta
					name="description"
					content="Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis
					suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis.
					Magnis interdum turpis in nec metus eleifend molestie bibendum."
				/>
				<link rel="canonical" href={"/projects/" + filteredItem[0].URIName} />
			</Helmet>
			{/* <div className="absolute top-[20vh] right-0 bg-black text-xl text-white font-medium font-quicksand py-2 px-10">
				Designs
			</div> */}
			<div
				ref={imgCon}
				className="px-5 sm:px-8 md:px-12 xl:px-16 2xl:px-24 transition-opacity ease duration-1000 overflow-x-hidden"
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
						className="flex gap-4 md:gap-10 mt-4 lg:mt-7 2xl:mt-10 text-xs md:text-base"
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
					<div className="mt-7">
						{/* <div>{filteredItem[0].type}</div> */}
						{filteredItem[0].status === "ongoing" && (
							<div className="text-amber-500 w-fit bg-amber-100 px-3 py-1 rounded-xl text-xs md:text-sm font-semibold text-center">
								Ongoing
							</div>
						)}
						{filteredItem[0].status === "soon" && (
							<div className="text-gray-700 w-fit bg-gray-300 px-3 py-1 rounded-xl text-xs md:text-sm font-semibold text-center">
								Soon
							</div>
						)}
					</div>
					<div className="mt-16 sm:mt-24 2xl:mt-32">
						<p
							ref={overview}
							className="text-center max-6xl leading-normal md:leading-relaxed xl:leading-[1.75] text-base md:text-lg lg:text-xl 2xl:text-2xl"
						>
							{filteredItem[0].description}
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 mt-7 2xl:mt-10">
						{filteredItem[0]?.images.map((current: ImageProps, index: number) => {
							console.log(
								index % 3 === 0 && !isMobileView ? "col-span-2" : "col-span-1"
							);
							return (
								<div
									className={`${
										index % 3 === 0 && !isMobileView
											? "col-span-2"
											: "col-span-1"
									} mt-5 2xl:mt-14 h-fit`}
									key={index}
								>
									<div
										className="group project-imgCon relative w-full h-full max-h-[70rem] overflow-hidden"
										style={index === 0 ? { opacity: 0 } : {}}
									>
										<img
											className="group-hover:scale-[1.05] transition-transform duration-500 ease-out w-full h-full object-cover object-center"
											src={current.image}
											alt={current.image}
										/>
										{index !== 0 && (
											<div className="absolute top-0 right-0 bg-white w-full h-full"></div>
										)}
									</div>
									{index === 0 && (
										<>
											<div className="w-full">
												<div className="mt-14 mb-24 max-w-3xl">
													<h1
														ref={categoryTitle}
														className={`${
															filteredItem[0].categoryDescription
																? filteredItem[0]
																		.categoryDescription!
																		.length > 10
																	? "text-3xl lg:text-5xl xl:text-7xl"
																	: "text-4xl lg:text-6xl xl:text-8xl"
																: "text-3xl lg:text-5xl xl:text-7xl"
														} uppercase  font-medium font-neueMontrealRegular`}
													>
														{filteredItem[0].categoryDescription ||
															"development for community"}
													</h1>
												</div>
											</div>
											<div className="w-full flex justify-end">
												<div className="w-full mb-20 md:mb-0 md:w-1/2 flex justify-center">
													<div className="mt-14 max-w-2xl">
														<h5 className="text-[#4E4E4E] mb-3 sm:mb-5 text-sm sm:text-base">
															{filteredItem[0].purpose &&
																"THE PROJECT PURPOSE"}
														</h5>
														<p className="leading-normal lg:leading-8 text-base md:text-lg lg:text-xl 2xl:text-2xl">
															{filteredItem[0].purpose}
														</p>
													</div>
												</div>
											</div>
										</>
									)}

									{index !== 0 &&
										index === 3 &&
										location.pathname.includes("projects") && (
											<div className="w-full flex flex-col xl:flex-row gap-0 xl:gap-10 my-14 md:my-0">
												<div className="flex-1">
													<div className="mt-14 max-w-2xl">
														<h5 className="text-[#4E4E4E] mb-3 sm:mb-5 text-sm sm:text-base">
															KEY FEATURES
														</h5>
														<p className="leading-normal lg:leading-8 text-base md:text-lg lg:text-xl 2xl:text-2xl">
															{parse(filteredItem[0].key_features!)}
														</p>
													</div>
												</div>
												<div className="flex-1">
													<div className="mt-14 max-w-2xl">
														<h5 className="text-[#4E4E4E] mb-3 sm:mb-5 text-sm sm:text-base">
															TECHNOLOGIES
														</h5>
														<div className="flex flex-wrap max-w-2xl gap-10 justify-start">
															<IconContext.Provider
																value={{
																	size: isMobileView
																		? "2rem"
																		: "2.5rem",
																}}
															>
																{filteredItem[0].technologies!.map(
																	(tech) => (
																		<Icon
																			key={tech}
																			name={tech}
																		/>
																	)
																)}
															</IconContext.Provider>
														</div>
													</div>
												</div>
											</div>
										)}
									{/* {index === 3 && location.pathname.includes("designs") && (
										<div className="w-full flex">
											<div className="mt-14 max-w-2xl">
												<h5 className="text-[#4E4E4E] mb-3 sm:mb-5 text-sm sm:text-base">
													REFLECTION AND LEARNING
												</h5>
												<p className="leading-normal lg:leading-8 text-base md:text-lg lg:text-xl 2xl:text-2xl">
													{filteredItem[0].learning}
												</p>
											</div>
										</div>
									)} */}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col pt-12">
				{location.pathname.includes("projects") && (
					<div className="px-5 sm:px-8 md:px-12 xl:px-16 2xl:px-24 mt-14 max-w-5xl transition-opacity ease duration-1000">
						<h5 className="text-[#4E4E4E] mb-3 sm:mb-5 text-sm sm:text-base">
							ROLES AND RESPONSIBILITIES
						</h5>

						{filteredItem[0].roles_and_responsibilities!.split("\n").map((str) => (
							<p className="leading-normal lg:leading-8 text-base md:text-lg lg:text-xl 2xl:text-2xl text-[black] mb-5">
								{str}
							</p>
						))}
					</div>
				)}
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
											<img src={project.thumbnail} alt={project.thumbnail} />
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
