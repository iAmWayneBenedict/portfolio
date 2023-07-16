import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";

const Timeline = () => {
	gsap.registerPlugin(ScrollTrigger);
	const title = useRef<HTMLHeadingElement>(null);
	const body = useRef<HTMLTableElement>(null);

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
				"bg absolute rotate-6 -top-[10%] -left-[100%] w-[500%] h-[100rem] bg-[black]";
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
					rotate: 4,
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
		<div className="pt-48 sm:pt-56 md:pt-96">
			<div className="px-5 md:px-24 text-white">
				<h1
					ref={title}
					className="overflow-hidden block relative max-w-7xl font-light"
					style={{ fontSize: `clamp(3rem, 10vw, 5rem)` }}
				>
					<p className="title-text leading-1 uppercase">
						Nurturing breakthroughs into a foundation for growth.
					</p>
				</h1>
				<p className="mt-16 text-xl">Transforms experiences into knowledge.</p>
			</div>
			<table
				ref={body}
				className="border-collapse border-0 md:border-y-[1px] border-[#4F4F4F] w-full mt-48"
			>
				<tbody className="text-white">
					<tr className="border-0 md:border-y-[1px] border-[#4F4F4F]">
						<td className="py-10 px-5 md:px-20 hidden lg:flex flex-col w-[25rem]">
							<h1 className="text-6xl font-bold h-full">2023</h1>
							<h1 className="text-xl h-full mt-5">March - June</h1>
						</td>
						<td className="py-10 px-5 md:px-20 border-0 md:border-y-[1px] border-l-[1px] border-[#4F4F4F]">
							<div className="w-full flex justify-end">
								<h6 className="text-xl md:text-2xl italic text-[#858585] hidden md:block">
									Intern
								</h6>
							</div>
							<h1 className="mb-3 text-3xl md:text-6xl font-bold h-full block md:hidden">
								2023
							</h1>
							<h3 className="text-3xl md:text-5xl">Web Developer</h3>
							<h5 className="text-xl md:text-2xl text-[#858585] max-w-5xl">
								Department of Information and Communication Technology Region V
								Camarines Sur Provincial Office
							</h5>
							<p className="mt-5 max-w-5xl text-xl text-[#d8d8d8]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
								velit fugit alias, ab nisi ducimus, minus facilis exercitationem nam
								deserunt recusandae adipisci nesciunt, voluptates non. Ea aliquid
								corrupti numquam culpa.
							</p>
						</td>
					</tr>
					<tr className="border-0 md:border-y-[1px] border-[#4F4F4F]">
						<td className="py-10 px-5 md:px-20 hidden lg:flex flex-col w-[25rem]">
							<h1 className="text-6xl font-bold h-full">2023</h1>
							<h1 className="text-xl h-full mt-5">August 2019 - July 2023</h1>
						</td>
						<td className="py-10 px-5 md:px-20 border-0 md:border-y-[1px] border-l-[1px] border-[#4F4F4F]">
							<div className="w-full flex justify-end">
								<h6 className="text-xl md:text-2xl italic text-[#858585] hidden md:block">
									College
								</h6>
							</div>
							<h1 className="mb-3 text-3xl md:text-6xl font-bold h-full block md:hidden">
								2023
							</h1>
							<h3 className="text-3xl md:text-5xl">BS in Information Technology</h3>
							<h5 className="text-xl md:text-2xl text-[#858585]">
								Camarines Sur Polytechnic Colleges
							</h5>
							<p className="mt-5 max-w-5xl text-xl text-[#d8d8d8]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
								velit fugit alias, ab nisi ducimus, minus facilis exercitationem nam
								deserunt recusandae adipisci nesciunt, voluptates non. Ea aliquid
								corrupti numquam culpa.
							</p>
						</td>
					</tr>
					<tr className="border-0 md:border-y-[1px] border-[#4F4F4F]">
						<td className="py-10 px-5 md:px-20 hidden lg:flex flex-col w-[25rem]">
							<h1 className="text-6xl font-bold h-full">2019</h1>
							<h1 className="text-xl h-full mt-5">July 2017 - May 2019</h1>
						</td>
						<td className="py-10 px-5 md:px-20 border-0 md:border-y-[1px] border-l-[1px] border-[#4F4F4F]">
							<div className="w-full flex justify-end">
								<h6 className="text-xl md:text-2xl italic text-[#858585] hidden md:block">
									Senior High
								</h6>
							</div>
							<h1 className="mb-3 text-3xl md:text-6xl font-bold h-full block md:hidden">
								2019
							</h1>
							<h3 className="text-3xl md:text-5xl">General Academic Strand</h3>
							<h5 className="text-xl md:text-2xl text-[#858585]">
								ACLC College of Iriga, Inc.
							</h5>
							<p className="mt-5 max-w-5xl text-xl text-[#d8d8d8]">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
								velit fugit alias, ab nisi ducimus, minus facilis exercitationem nam
								deserunt recusandae adipisci nesciunt, voluptates non. Ea aliquid
								corrupti numquam culpa.
							</p>
						</td>
					</tr>
				</tbody>
			</table>
			<br />
			<ContactLayouts />
		</div>
	);
};

export default Timeline;
