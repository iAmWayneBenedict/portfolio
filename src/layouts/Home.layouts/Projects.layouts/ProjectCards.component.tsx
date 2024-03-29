import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useRef, useEffect } from "react";

import "react-lazy-load-image-component/src/effects/blur.css";
import { Link, useNavigate } from "react-router-dom";
import CustomLink from "../../../components/ui/CustomLink";
import { useMediaQuery } from "react-responsive";
import CustomEase from "gsap/CustomEase";

interface Props {
	title?: string;
	image?: string;
	src?: string;
	URIName?: string;
}

const ProjectCards: React.FC<Props> = ({ title, image, src, URIName }) => {
	const demoLink = useRef<HTMLAnchorElement>(null);
	const slide = useRef<HTMLDivElement>(null);
	const img = useRef<HTMLImageElement>(null);
	const navigate = useNavigate();
	const hiddenAnchor = useRef<HTMLAnchorElement>(null);

	// const dLink = new SplitType(demoLink.current!);

	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);

	const handleMouseOver = (event: React.MouseEvent) => {};
	const handleMouseLeave = (event: React.MouseEvent) => {};
	let isMobileView = useMediaQuery({ query: "(max-width: 480px)" });

	return (
		<div className="w-full h-full flex flex-col gap-5 z-20">
			<div
				ref={slide}
				onClick={() => hiddenAnchor.current?.click()}
				className="slide-hover-effect slider-image-con w-full h-full basis-11/12 overflow-hidden relative"
			>
				<CustomLink reference={hiddenAnchor} to={"/projects/" + URIName} />
				<img
					// key={src}
					src={image}
					alt={URIName}
					ref={img}
					// placeholderSrc={src!.split(".")[0] + "-small.jpg"}
					// wrapperClassName="w-full h-full"
					className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
					style={{
						transition: "all 1s ease",
					}}
				/>
				<div className="image-slider-overlay absolute bottom-0 left-0 bg-white h-full w-full duration-1000 ease-out"></div>
			</div>
			<div className="basis-1/12 flex items-center justify-between">
				<span className="text-sm md:text-lg font-bold">{title}</span>
				{/* <div>
					<Link
						to={src || "/"}
						target="_blank"
						onMouseOver={(event) => handleMouseOver(event)}
						onMouseLeave={(event) => handleMouseLeave(event)}
						ref={demoLink}
						className="text-lg"
					>
						<div className="link-bottom-style hover:after:animate-linkFirstAnim hover:before:animate-linkSecondAnim relative overflow-hidden after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[black] before:absolute before:content-[''] before:bottom-0 before:left-[-200%] before:w-full before:h-px before:bg-[black] text-sm md:text-lg">
							{src && "Live Demo"}
						</div>
					</Link>
				</div> */}
			</div>
		</div>
	);
};

export default ProjectCards;
