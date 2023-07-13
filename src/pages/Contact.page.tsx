import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Input from "../layouts/Contact.layouts/Input";
import TextArea from "../layouts/Contact.layouts/TextArea";
import ButtonOutlineSend from "../components/forms/ButtonOutlineSend.component";
import { Link } from "react-router-dom";
import SplitType from "split-type";

const Contact = () => {
	gsap.registerPlugin(ScrollTrigger);
	const title = useRef<HTMLHeadingElement>(null);
	const formCon = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		const bgCon = document.querySelector(".bg-con") as HTMLElement;
		const nav = document.querySelector("nav") as HTMLElement;
		// nav.style.filter = "invert(1)";
		// nav.style.zIndex = "1000";
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
			// nav.style.filter = "invert(0)";
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
				"bg absolute rotate-6 -top-[10%] -left-[100%] w-[500%] h-[100rem] bg-black";
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
				formCon.current!,
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
					<p className="title-text leading-1">LET’S CONNECT AND GET TO KNOW EACH OTHER</p>
				</h1>
				<p className="mt-16 text-xl">Let me help you become even greater at what you do.</p>
			</div>
			<div ref={formCon} className="w-full flex flex-col gap-48 lg:flex-row lg:gap-0">
				<div className="px-5 md:px-24 flex-1 max-w-6xl">
					<form action="" className="w-full flex flex-col gap-5">
						<br />
						<Input placeholder="Your name" type="text" name="name" />
						<Input placeholder="Email address" type="email" name="email" />
						<Input placeholder="Subject" type="text" name="subject" />
						<TextArea
							name="message"
							placeholder="What do you wanna talk about?"
						></TextArea>
						<ButtonOutlineSend />
					</form>
					<p className="text-sm sm:text-base mt-10">
						This site is protected by reCAPTCHA and the Google Privacy Policy and Terms
						of Service apply.
					</p>
				</div>
				<div className="px-5 md:px-24 flex flex-col gap-36 items-end flex-1 mt-20">
					<div className="flex flex-col gap-10 items-end">
						<h1
							style={{ fontSize: "clamp(1.5rem, 6vw, 2.25rem)" }}
							className="text-right"
						>
							Open for collaboration
						</h1>
						<h1
							style={{ fontSize: "clamp(1.5rem, 6vw, 2.25rem)" }}
							className="text-right"
						>
							Available for freelance work
						</h1>
					</div>
					<div className="flex flex-col gap-3 items-end">
						<p className="text-gray-400">Directly drop me a line</p>
						<Link
							style={{ fontSize: "clamp(1.25rem, 6vw, 1.875rem)" }}
							to="mailto:wayneb.iraola@outlook.com"
						>
							<h2>wayneb.iraola@outlook.com</h2>
						</Link>
					</div>
				</div>
			</div>
			<div className="mt-64 px-5 md:px-24">
				<p className="text-gray-400 mb-10">Connect with me in</p>
				<div className="flex flex-col gap-5">
					<Link
						className="font-light w-fit"
						style={{ fontSize: "clamp(2.5rem, 10vw, 3.75rem)" }}
						to="/"
					>
						<h2>LinkedIn</h2>
					</Link>
					<Link
						className="font-light w-fit"
						style={{ fontSize: "clamp(2.5rem, 10vw, 3.75rem)" }}
						to="/"
					>
						<h2>GitHub</h2>
					</Link>
					<Link
						className="font-light w-fit"
						style={{ fontSize: "clamp(2.5rem, 10vw, 3.75rem)" }}
						to="/"
					>
						<h2>Dribbble</h2>
					</Link>
				</div>
			</div>
			<div className="px-5 md:px-24 flex justify-between w-full mt-48">
				<p>Terms and Conditions</p>
				<p>© 2022 | WAYNE</p>
			</div>
		</div>
	);
};

export default Contact;
