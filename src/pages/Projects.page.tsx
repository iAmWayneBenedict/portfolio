import { useRef, useEffect, useState, useCallback, useLayoutEffect } from "react";
import imagesLoaded from "imagesloaded";
import categoryHandler from "../utils/projectCategoryHandler";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomLink from "../components/ui/CustomLink";
import data from "../utils/data";
import { isMobile } from "react-device-detect";
import { useMediaQuery } from "react-responsive";

const categoryData = [
	["All.", "all"],
	["Community Projects.", "community-projects"],
	["RESTful APIs.", "restful-apis"],
	["Open Source.", "open-source"],
	["Branding.", "branding"],
];

const Projects: React.FC = () => {
	const imgCon = useRef<HTMLDivElement>(null);
	const activeHandler = useRef<HTMLDivElement>(null);
	const titlePage = useRef<HTMLHeadingElement>(null);
	const [active, setActive] = useState<string>("");
	const location = useLocation();
	const navigate = useNavigate();

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);

	useEffect(() => {
		const imgs = imagesLoaded(imgCon.current!);
		imgs.on("done", (e) => {
			setAnimation();
		});
	}, [location]);

	function setAnimation() {
		setActive(activeHandler.current!.dataset.active!);

		const tl = gsap.timeline();
		tl.fromTo(
			titlePage.current!,
			{
				y: "200%",
				// opacity: 0,
			},
			{
				y: 0,
				duration: 2.5,
				ease: CustomEase.create(
					"custom",
					"M0,0,C0.084,0.61,0.106,0.822,0.172,0.876,0.248,0.938,0.374,1,1,1"
				),
				// opacity: 1,
			},
			"+=2"
		)
			.fromTo(
				"button.project-category",
				{
					y: "100%",
					opacity: 0,
				},
				{
					y: 0,
					opacity: 1,
					stagger: 0.2,
				},
				"-=1.75"
			)
			.fromTo(
				"div.line-category",
				{
					width: 0,
					opacity: 0,
				},
				{
					opacity: 1,
					width: "100%",
					stagger: 0.5,
				}
			);

		const images = gsap.utils.toArray("div.project-imgCon");
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
				scrollTrigger: {
					trigger: document.querySelector(
						"div.project-imgCon"
					) as NodeListOf<HTMLElement>[0],
				},
			}
		);
		images.forEach((image, index) => {
			let img = image as HTMLDivElement;
			if (index === 0) return;
			gsap.to(img.lastElementChild, {
				width: 0,
				duration: 2.5,
				ease: CustomEase.create(
					"custom",
					"M0,0,C0.084,0.61,0.106,0.822,0.172,0.876,0.248,0.938,0.374,1,1,1"
				),
				scrollTrigger: {
					trigger: img,
				},
			});
		});
	}

	useEffect(() => {
		categoryHandler({ active, setActive, imgCon, activeHandler });
	}, [active]);

	useEffect(() => {
		if (location.pathname === "/projects") {
			gsap.to(".App", {
				opacity: 1,
				duration: 0,
				delay: 1,
			});
		}
	}, []);
	let isMobileView = useMediaQuery({ query: "(max-width: 480px)" });
	console.log(isMobileView);
	return (
		<>
			<div className="mx-5 md:mx-24" ref={imgCon}>
				<div className="mt-48">
					<h1
						className="text-8xl overflow-hidden pb-2"
						style={{ fontSize: "clamp(2rem, 10vw, 6rem)" }}
					>
						<div ref={titlePage}>All Projects</div>
					</h1>
					<div
						key={"activeHandler"}
						data-active="all"
						ref={activeHandler}
						className="mt-16 flex flex-row flex-wrap gap-3 md:gap-10 overflow-hidden"
					>
						{categoryData.map(([value, name], index) => {
							return (
								<div
									className="flex flex-row items-center gap-3 md:gap-10"
									style={{ fontSize: "clamp(1.25rem, 3vw, 2.25rem)" }}
									key={index + name}
								>
									<button
										type="button"
										data-name={name}
										className="project-category italic transition-opacity duration-250 ease-linear"
									>
										{value}
									</button>
									{index !== categoryData.length - 1 ? (
										<div className="h-[1px] md:h-[3px] w-[20px] lg:w-[40px]">
											<div className="line-category h-full w-full transition-opacity duration-250 ease-linear bg-black"></div>
										</div>
									) : (
										""
									)}
								</div>
							);
						})}
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 mt-10 md:mt-24">
					{
						// [
						// 	"/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp",
						// 	"/assets/img/davey-gravy-DmO662qvWO8-unsplash.webp",
						// 	"/assets/img/dzmitry-tselabionak-dSWBjiKi5uk-unsplash.jpg",
						// 	"/assets/img/osman-rana-BltXOAu8Ckw-unsplash.webp",
						// 	"/assets/img/steve-johnson-bTulpIPKxGg-unsplash.webp",
						// ]
						data.designs.get("bagudbudExpressV2")?.images.map((image, index) => (
							<div
								className={
									index % 3 === 0 && !isMobileView
										? "col-span-2 mt-14"
										: "mt-14 h-fit"
								}
								key={index}
							>
								<div className="project-imgCon relative w-full h-full max-h-[70rem] overflow-hidden">
									<img
										className="w-full h-full object-cover object-center"
										src={image.image}
										alt=""
									/>
									{index !== 0 && (
										<div className="absolute top-0 right-0 bg-white w-full h-full"></div>
									)}
								</div>
								<div className="mt-8">
									<p className="text-base md:text-lg lg:text-2xl max-w-3xl leading-relaxed">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Totam vero eveniet maiores, doloribus dignissimos
										praesentium a iusto provident cum excepturi.
										<CustomLink to={"/"}>send</CustomLink>
									</p>
								</div>
							</div>
						))
					}
				</div>
			</div>
			<ContactLayouts classes="bg-white" />
		</>
	);
};

export default Projects;
