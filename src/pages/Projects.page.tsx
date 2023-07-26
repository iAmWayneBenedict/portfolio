import { useRef, useEffect, useState, useCallback, useLayoutEffect } from "react";
import imagesLoaded from "imagesloaded";
import categoryHandler from "../utils/projectCategoryHandler";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CustomLink from "../components/ui/CustomLink";
import data, { CategoryProps } from "../utils/data";
import { isMobile } from "react-device-detect";
import { useMediaQuery } from "react-responsive";
import Category from "../layouts/Projects.layouts/Category";
import ProjectsDetail from "../layouts/Projects.layouts/ProjectsDetail";
import { Helmet } from "react-helmet-async";

const categoryData = [
	["All.", "all"],
	["Community Projects.", "community-projects"],
	["RESTful APIs.", "restful-apis"],
	["Open Source.", "open-source"],
	["Branding.", "branding"],
];

interface Props {
	setCategoryChanged: React.Dispatch<React.SetStateAction<string>>;
}

const Projects: React.FC<Props> = ({ setCategoryChanged }) => {
	const imgCon = useRef<HTMLDivElement>(null);
	const activeHandler = useRef<HTMLDivElement>(null);
	const titlePage = useRef<HTMLHeadingElement>(null);
	const projCon = useRef<HTMLDivElement>(null);
	const [active, setActive] = useState<string>("");
	const [delay, setDelay] = useState<number>(1);
	const [items, setItems] = useState<any>([...data.projects, ...data.designs]);
	const location = useLocation();
	const navigate = useNavigate();

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);

	useEffect(() => {
		const imgs = imagesLoaded(imgCon.current!);
		imgs.on("done", (e) => {
			setAnimation();
			imageAnimations();
		});
	}, [location]);

	useEffect(() => {
		const tl = imageAnimations();

		return () => {
			tl.kill();
		};
	}, [items]);

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
	}

	function imageAnimations() {
		const images = gsap.utils.toArray("div.project-imgCon");
		const tl = gsap.timeline();
		tl.fromTo(
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
				delay,
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

		return tl;
	}

	useEffect(() => {
		categoryHandler({
			active,
			setActive,
			imgCon,
			activeHandler,
			projCon,
			items,
			setItems,
			setDelay,
			setCategoryChanged,
		});
	}, [active]);

	useEffect(() => {
		if (location.pathname === "/projects") {
			gsap.to(".App", {
				opacity: 1,
				duration: 0,
				delay: 1,
			});
		}
	}, [location]);
	let isMobileView = useMediaQuery({ query: "(max-width: 480px)" });
	const projects = [...data.projects, ...data.designs];
	const projectsLength = data.projects.length;
	return (
		<>
			<Helmet>
				<title>Projects</title>
				<meta name="description" content="Discover all projects" />
				<link rel="canonical" href="/projects" />
			</Helmet>
			<div className="mx-5 md:mx-24" ref={imgCon}>
				<div className="mt-32 2xl:mt-48">
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
						className="mt-12 md:mt-16 flex flex-row flex-wrap gap-3 md:gap-10 "
					>
						{categoryData.map(([value, name], index) => {
							return (
								<Category
									key={name}
									index={index}
									name={name}
									value={value}
									categoryData={categoryData}
								/>
							);
						})}
					</div>
				</div>
				<div
					ref={projCon}
					className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 mt-10 2xl:mt-24"
				>
					{items &&
						items.map((project: CategoryProps, index: number) => (
							<ProjectsDetail
								index={index}
								isMobileView={isMobileView}
								projectsLength={projectsLength}
								project={project}
							/>
						))}
				</div>
			</div>
			<ContactLayouts classes="bg-white" />
		</>
	);
};

export default Projects;
