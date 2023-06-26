import React, { useEffect, useRef } from "react";

import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomLink from "./CustomLink";
interface Props {
	delay: string | undefined;
}
const BrandName: React.FC<Props> = ({ delay }) => {
	const brandName = useRef<HTMLDivElement>(null);
	const path = useLocation();

	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		gsap.fromTo(
			brandName.current!,
			{
				y: "-100%",
			},
			{
				y: 0,
				delay: location.pathname === "/" && delay === "11" ? "11" : "1",
			}
		);
	}, [path]);

	return (
		<div className="flex-1 flex sm:justify-center mr-20 order-1 sm:order-2 overflow-hidden">
			<motion.div
				transition={{
					ease: [0.6, 0.01, -0.05, 0.95],
					duration: 0.8,
				}}
				layoutId="brand-logo"
				className="font-quicksand font-bold"
				ref={brandName}
			>
				<CustomLink to="/" className="relative">
					WAYNE
					{/* <span className="absolute bottom-[3px] -right-[6px] bg-blue-600 w-[4px] h-[4px] rounded-full"></span> */}
				</CustomLink>
			</motion.div>
		</div>
	);
};

export default BrandName;
