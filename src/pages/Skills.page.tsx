import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";

const Skills = () => {
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
		<div className="pt-48 sm:pt-56 md:pt-96 text-white pb-10">
			<div className="px-5 md:px-24">
				<h1
					ref={title}
					className="overflow-hidden block relative max-w-7xl font-light"
					style={{ fontSize: `clamp(3rem, 10vw, 6rem)` }}
				>
					<p className="title-text leading-1 uppercase">
						Harnessing skills compatible with your business needs
					</p>
				</h1>
			</div>
			<table
				ref={body}
				className="border-collapse border-0 md:border-y-[1px] border-gray-300 w-full mt-48"
			>
				<tbody className="text-white">
					<tr className="border-0 md:border-y-[1px] border-gray-300">
						<td className="py-20 px-5 md:px-20 border-0 md:border-y-[1px] border-gray-300 flex-col">
							<div className="text-3xl py-10">01.</div>
							<h1 className="mb-3 max-w-2xl text-5xl md:text-8xl h-full">
								Web Development
							</h1>
							<div className="flex justify-end">
								<div className="max-w-5xl">
									<p className="mt-5 max-w-5xl text-xl md:text-2xl text-[#d8d8d8]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dignissimos velit fugit alias, ab nisi ducimus, minus
										facilis exercitationem nam deserunt recusandae adipisci
										nesciunt, voluptates non. Ea aliquid corrupti numquam culpa.
									</p>
									<div className="w-full mt-10">
										<img
											className="w-full "
											src="https://cdn.dribbble.com/userupload/8214048/file/original-1009503e5f795adda162842b211f1f24.png?compress=1&resize=1600x1034"
											alt=""
										/>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr className="border-0 md:border-y-[1px] border-gray-300">
						<td className="py-20 px-5 md:px-20 border-0 md:border-y-[1px] border-gray-300 flex-col">
							<div className="text-3xl py-10">02.</div>
							<h1 className="mb-3 max-w-2xl text-5xl md:text-8xl h-full">
								UI Design
							</h1>
							<div className="flex justify-end">
								<div className="max-w-5xl">
									<p className="mt-5 max-w-5xl text-xl md:text-2xl text-[#d8d8d8]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dignissimos velit fugit alias, ab nisi ducimus, minus
										facilis exercitationem nam deserunt recusandae adipisci
										nesciunt, voluptates non. Ea aliquid corrupti numquam culpa.
									</p>
									<div className="w-full mt-10">
										<img
											className="w-full "
											src="https://cdn.dribbble.com/userupload/8161256/file/original-50f2c0ad5493506202e9f3e4dfebd9e1.png?compress=1&resize=1600x1034"
											alt=""
										/>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr className="border-0 md:border-y-[1px] border-gray-300">
						<td className="py-20 px-5 md:px-20 border-0 md:border-y-[1px] border-gray-300 flex-col">
							<div className="text-3xl py-10">03.</div>
							<h1 className="mb-3 max-w-2xl text-5xl md:text-8xl h-full">
								API Development
							</h1>
							<div className="flex justify-end">
								<div className="max-w-5xl">
									<p className="mt-5 max-w-5xl text-xl md:text-2xl text-[#d8d8d8]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dignissimos velit fugit alias, ab nisi ducimus, minus
										facilis exercitationem nam deserunt recusandae adipisci
										nesciunt, voluptates non. Ea aliquid corrupti numquam culpa.
									</p>
									<div className="w-full mt-10">
										<img
											className="w-full "
											src="https://cdn.dribbble.com/userupload/8245591/file/original-031f882fa1bba823883e21a23046a9e1.png?compress=1&resize=1600x1034"
											alt=""
										/>
									</div>
								</div>
							</div>
						</td>
					</tr>
					<tr className="border-0 md:border-y-[1px] border-gray-300">
						<td className="py-20 px-5 md:px-20 border-0 md:border-y-[1px] border-gray-300 flex-col">
							<div className="text-3xl py-10">04.</div>
							<h1 className="mb-3 max-w-2xl text-5xl md:text-8xl h-full">
								Web Automation
							</h1>
							<div className="flex justify-end">
								<div className="max-w-5xl">
									<p className="mt-5 max-w-5xl text-xl md:text-2xl text-[#d8d8d8]">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Dignissimos velit fugit alias, ab nisi ducimus, minus
										facilis exercitationem nam deserunt recusandae adipisci
										nesciunt, voluptates non. Ea aliquid corrupti numquam culpa.
									</p>
									<div className="w-full mt-10">
										<img
											className="w-full "
											src="https://cdn.dribbble.com/userupload/8245591/file/original-031f882fa1bba823883e21a23046a9e1.png?compress=1&resize=1600x1034"
											alt=""
										/>
									</div>
								</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			<ContactLayouts />
		</div>
	);
};

export default Skills;
