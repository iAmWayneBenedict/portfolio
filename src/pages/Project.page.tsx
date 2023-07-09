import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CategoryProps, getData } from "../utils/data";
import CustomLink from "../components/ui/CustomLink";
import Title from "../layouts/Project.layouts/Title.layouts";
import data from "../utils/data";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import imagesLoaded from "imagesloaded";
import { CustomEase } from "gsap/CustomEase";
import { useMediaQuery } from "react-responsive";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";

const Project = () => {
	const location = useLocation();
	const imgCon = useRef<HTMLDivElement>(null);
	const [item, setItem] = useState<any>(null);
	const params = useParams();

	useEffect(() => {
		const imgs = imagesLoaded(imgCon.current!);
		imgs.on("done", (e) => {
			setAnimation();
		});
	}, [location]);

	useEffect(() => {
		if (location.pathname.includes("/projects/")) {
			gsap.to(".App", {
				opacity: 1,
				duration: 0,
				delay: 1,
			});
		}
	}, []);

	useEffect(() => {
		const filteredItem = getData("projects", params.name);
		if (!filteredItem) return;
		setItem(filteredItem[0]);
	}, []);

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);
	function setAnimation() {
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
	let isMobileView = useMediaQuery({ query: "(max-width: 480px)" });
	return (
		<>
			<div ref={imgCon} className="w-full px-5 md:px-20">
				<div className="flex flex-col items-center">
					<div className="w-full flex justify-center">
						<Title src="/">{item ? item.name : ""}</Title>
					</div>
					<div className="flex gap-4 md:gap-10 mt-4 md:mt-10 text-xs md:text-base">
						<CustomLink to="/" className="flex gap-0 md:gap-3 items-center">
							<img
								src="/assets/ico/github.svg"
								className="scale-75 md:scale-1"
								style={{ filter: "invert(1)" }}
								alt=""
							/>
							<span>Visit Repository</span>
						</CustomLink>
						<CustomLink to="/" className="flex gap-0 md:gap-3 items-center">
							<img
								src="/assets/ico/dribbble 1.svg"
								className="scale-75 md:scale-1"
								style={{ filter: "invert(1)" }}
								alt=""
							/>
							<span>View on Dribble</span>
						</CustomLink>
					</div>
					<div className="mt-36">
						<p className="text-center max-w-6xl leading-[1.75] text-lg md:text-2xl">
							Lorem ipsum dolor sit amet consectetur. Mi nec scelerisque et venenatis
							suspendisse vitae velit. Tincidunt sit in eu at bibendum elit felis.
							Magnis interdum turpis in nec metus eleifend molestie bibendum.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-20 mt-10">
						{item &&
							item.images.map(
								(current: { image: string | undefined }, index: number) => (
									<div
										className={`${
											index % 3 === 0 && !isMobileView ? "col-span-2" : ""
										} mt-5 lg:mt-14 h-fit`}
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
														<h1 className="text-3xl lg:text-5xl xl:text-7xl font-medium font-neueMontrealRegular">
															DEVELOPMENT FOR COMMUNITY
														</h1>
													</div>
												</div>
												<div className="w-full flex justify-end">
													<div className="w-1/2 flex justify-center">
														<div className="mt-14 max-w-2xl">
															<h5 className="text-[#4E4E4E] mb-5 text-base">
																THE PROJECT PURPOSE
															</h5>
															<p className="leading-8 text-lg md:text-2xl">
																Lorem ipsum dolor sit amet
																consectetur. Mi nec scelerisque et
																venenatis suspendisse vitae velit.
																Tincidunt sit in eu at bibendum elit
																felis. Magnis interdum turpis in nec
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
													<p className="leading-8 text-lg md:text-2xl">
														Lorem ipsum dolor sit amet consectetur. Mi
														nec scelerisque et venenatis suspendisse
														vitae velit. Tincidunt sit in eu at bibendum
														elit felis. Magnis interdum turpis in nec
														metus eleifend molestie bibendum.
													</p>
												</div>
											</div>
										)}
									</div>
								)
							)}
					</div>
				</div>
			</div>
			<ContactLayouts classes="bg-white text-black" />
		</>
	);
};

export default Project;
