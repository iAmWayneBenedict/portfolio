import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useRef } from "react";
import Line from "../../../components/ui/Line.component";
import useSmoothScroll from "../../../hooks/useSmoothScroll";
import { useEffect } from "react";

const AboutSection = () => {
	const d = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(ScrollTrigger);

	return (
		<div className="flex flex-col mt-96" ref={d}>
			<Line position="mr-auto" color="bg-gray-300" colorHighlight="bg-black" id="line-one" />
			<div className="container mx-auto px-10 my-24">
				<p className="text-base sm:text-xl md:text-2xl tracking-wide">
					Lorem ipsum dolor sit amet consectetur. Risus elementum nibh non semper
					penatibus porttitor tempus. Ullamcorper at arcu massa amet. Ac nec tempor
					euismod amet id vel etiam. Suspendisse viverra nisl ac et fusce eu lacinia
					tortor tellus. Amet sed lobortis est ultrices donec enim ullamcorper. Odio morbi
					purus odio eu.
				</p>
			</div>
			<Line position="ml-auto" color="bg-gray-300" colorHighlight="bg-black" />
		</div>
	);
};

export default AboutSection;
