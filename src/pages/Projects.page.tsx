import { useRef, useEffect, useState } from "react";
import imagesLoaded from "imagesloaded";
import categoryHandler from "../utils/projectCategoryHandler";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";

const categoryData = [
	["All.", "all"],
	["Community Projects.", "community-projects"],
	["RESTful APIs.", "restful-apis"],
	["Open Source.", "open-source"],
	["Branding.", "branding"],
];

const Projects = () => {
	const imgCon = useRef<HTMLDivElement>(null);
	const activeHandler = useRef<HTMLDivElement>(null);
	const titlePage = useRef<HTMLHeadingElement>(null);
	const [active, setActive] = useState<string>("");

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);

	useEffect(() => {
		const imgs = imagesLoaded(imgCon.current!);
		imgs.on("done", (e) => {
			console.log(e);
		});
	}, []);

	useEffect(() => {
		// const title = new SplitType(titlePage.current!);
		setActive(activeHandler.current!.dataset.active!);

		const tl = gsap.timeline();
		tl.fromTo(
			titlePage.current!,
			{
				y: "100%",
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
		images.forEach((image) => {
			let img = image as HTMLDivElement;
			gsap.fromTo(
				img,
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
		});
		console.log(document.querySelectorAll("div.line-category"));
	}, []);

	useEffect(() => {
		categoryHandler({ active, setActive, imgCon, activeHandler });
	}, [active]);

	return (
		<>
			<div className="mx-24" ref={imgCon}>
				<div className="mt-48">
					<h1 className="text-8xl overflow-hidden pb-2">
						<div ref={titlePage}>All Projects</div>
					</h1>
					<div
						key={"activeHandler"}
						data-active="all"
						ref={activeHandler}
						className="mt-16 flex flex-row items-center gap-10 overflow-hidden"
					>
						{categoryData.map(([value, name], index) => {
							return (
								<div
									className="flex flex-row items-center gap-10 text-4xl"
									key={index + name}
								>
									<button
										type="button"
										data-name={name}
										className="project-category italic"
									>
										{value}
									</button>
									{index !== categoryData.length - 1 ? (
										<div className="h-[3px] w-[40px]">
											<div className="line-category h-full w-full transition-all duration-250 ease-linear bg-black"></div>
										</div>
									) : (
										""
									)}
								</div>
							);
						})}
					</div>
				</div>
				<div className="grid grid-cols-2 gap-20 mt-24">
					{[
						"/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp",
						"/assets/img/davey-gravy-DmO662qvWO8-unsplash.webp",
						"/assets/img/dzmitry-tselabionak-dSWBjiKi5uk-unsplash.jpg",
						"/assets/img/osman-rana-BltXOAu8Ckw-unsplash.webp",
						"/assets/img/steve-johnson-bTulpIPKxGg-unsplash.webp",
					].map((img, index) => (
						<div
							className={index % 3 === 0 ? "col-span-2 mt-14" : "mt-14"}
							key={index + img}
						>
							<div className="project-imgCon  w-full h-[70rem] overflow-hidden">
								<img className="w-full h-full object-cover" src={img} alt="" />
							</div>
							<div className="mt-8">
								<p className="text-2xl max-w-3xl leading-relaxed">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
									vero eveniet maiores, doloribus dignissimos praesentium a iusto
									provident cum excepturi.
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<ContactLayouts classes="bg-white" />
		</>
	);
};

export default Projects;
