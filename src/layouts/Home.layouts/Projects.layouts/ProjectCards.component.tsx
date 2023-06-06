import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useRef, useEffect } from "react";
import SplitType from "split-type";
import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

interface Props {
	src?: string;
}

const ProjectCards: React.FC<Props> = ({ src }) => {
	const demoLink = useRef<HTMLAnchorElement>(null);

	// const dLink = new SplitType(demoLink.current!);

	gsap.registerPlugin(ScrollTrigger);

	const handleMouseOver = (event: React.MouseEvent) => {
		// gsap.to(dLink.chars, {
		// 	y: 0,
		// 	stagger: 0.05,
		// 	onComplete: () => {
		// 		gsap.delayedCall(0.5, () => {
		// 			dLink.chars?.forEach((el) => [(el.style.textDecoration = "underline")]);
		// 		});
		// 	},
		// });
	};
	const handleMouseLeave = (event: React.MouseEvent) => {
		// gsap.to(dLink.chars, {
		// 	y: "100%",
		// 	duration: 0,
		// });
	};

	return (
		<div className="w-full h-full flex flex-col gap-5 z-20">
			<div className="w-full h-full basis-11/12 overflow-hidden">
				<LazyLoadImage
					key={src}
					alt={src}
					src={src}
					effect="blur"
					wrapperClassName="w-full h-full"
					className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
					style={{
						transition: "all 1s ease",
					}}
				/>
			</div>
			<div className="basis-1/12 flex items-center justify-between">
				<span className="text-lg">Sample</span>
				<div>
					<a
						href=""
						onMouseOver={(event) => handleMouseOver(event)}
						onMouseLeave={(event) => handleMouseLeave(event)}
						ref={demoLink}
						className="text-lg"
					>
						<div className="link-bottom-style hover:after:animate-linkFirstAnim hover:before:animate-linkSecondAnim relative overflow-hidden after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black before:absolute before:content-[''] before:bottom-0 before:left-[-200%] before:w-full before:h-px before:bg-black">
							Live Demo
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default ProjectCards;
