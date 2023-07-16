import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import Line from "../../../components/ui/Line.component";
import useSmoothScroll from "../../../hooks/useSmoothScroll";
import { useEffect } from "react";
import SplitType from "split-type";
interface Props {
	isLoaded: boolean;
}
const AboutSection = () => {
	const d = useRef<HTMLDivElement>(null);
	const des = useRef<HTMLParagraphElement>(null);
	const aboutTitle = useRef<HTMLHeadingElement>(null);

	// const p = new SplitType(des.current!);

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.to(des.current!, {
			duration: 2,
			y: 0,
			opacity: 1,

			scrollTrigger: {
				trigger: d.current!,
				start: "top bottom",
				toggleActions: "restart none none none",
			},
		});

		gsap.to(".line-one-top-about-fill", {
			width: "100%",
			duration: 1.5,

			scrollTrigger: {
				trigger: d.current!,
				start: "top bottom",
				toggleActions: "restart none none none",
			},
		});

		gsap.to(".line-one-bottom-about-fill", {
			width: "100%",
			duration: 1.5,

			scrollTrigger: {
				trigger: d.current!,
				start: "bottom bottom",
				toggleActions: "restart none none none",
			},
		});
	});

	return (
		<div className="flex flex-col mt-96" ref={d}>
			<Line
				position="mr-auto"
				color="bg-gray-300"
				colorHighlight="bg-[black]"
				id="line-one-top-about"
			/>
			<div className="container mx-auto px-10 my-24">
				<h1 className="font-bold text-3xl font-cinzel" ref={aboutTitle}>
					About
				</h1>
				<p
					id="des"
					ref={des}
					className="font-light opacity-0 tracking-wide translate-y-10 overflow-hidden"
					style={{ lineHeight: "2.3", fontSize: "clamp(16px, 1vw, 30px)" }}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe aut, distinctio
					cum unde corporis nesciunt laudantium, magni quo labore voluptas ut velit omnis
					eveniet eos. Quis velit ex rem laborum a eius laboriosam voluptatem corporis
					pariatur quisquam? Culpa, voluptates molestiae. Nihil quam quisquam excepturi
					quas esse officia doloremque quae omnis sint, repellendus, deserunt ab eaque
					fugiat iste iure a quasi.
				</p>
			</div>
			<Line
				position="ml-auto"
				color="bg-gray-300"
				colorHighlight="bg-[black]"
				id="line-one-bottom-about"
			/>
		</div>
	);
};

export default AboutSection;
