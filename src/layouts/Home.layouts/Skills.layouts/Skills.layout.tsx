import React from "react";
import Title from "../../../components/ui/Title.component";
import Card from "./Card.component";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Skills = () => {
	gsap.registerPlugin(ScrollTrigger);

	const triggerEl = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const cards = Array.from(document.querySelectorAll(".skills-con"));

		let firstEl: Element | null = null;

		cards.forEach((el, index) => {
			const titleCon = el.querySelector(".title-con")! as HTMLDivElement;
			const desc = el.querySelector(".desc")! as HTMLDivElement;

			if (index === 0) {
				firstEl = el;
			}

			let trigger = index <= 1 ? triggerEl.current! : firstEl;

			gsap.to(el, {
				width: "100%",
				duration: 0.75,

				// scrollTrigger: {
				// 	trigger: trigger,
				// 	start: "top top",
				// 	// toggleActions: "restart none none reverse",
				// },
			});
			gsap.to(titleCon, {
				opacity: 1,
				delay: 1,

				// scrollTrigger: {
				// 	trigger: trigger,
				// 	start: "top top",
				// 	// toggleActions: "restart none none reverse",
				// },
			});
			gsap.to(desc, {
				opacity: 1,
				delay: 1,

				// scrollTrigger: {
				// 	trigger: trigger,
				// 	start: "top top",
				// 	// toggleActions: "restart none none reverse",
				// },
			});
		});
	}, []);
	return (
		<div ref={triggerEl} className="mt-48 md:mt-96 mx-5 md:mx-20 tracking-wide">
			<p className="text-sm lg:text-xl text-center">
				Set of skills compatible with your needs.
			</p>
			<Title overrideConClasses="pt-36" name="skills" />

			<div className="w-full flex gap-5 lg:gap-10 flex-wrap justify-evenly md:px-5 xl:px-20 mt-36 md:mt-72 flex-col md:flex-row">
				<Card
					classes="bg-white order-1"
					src="/assets/svg/web.svg"
					title="Web Development"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!"
				/>
				<Card
					classes="bg-[black] text-white order-2"
					src="/assets/svg/ui.svg"
					title="UI Design"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!"
				/>
				<Card
					classes="bg-[black] text-white order-4 md:order-3"
					src="/assets/svg/api.svg"
					title="API Development"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!"
				/>
				<Card
					classes="bg-white order-3 md:order-4"
					src="/assets/svg/auto.svg"
					title="Web Automation"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!"
				/>
			</div>
		</div>
	);
};

export default Skills;
