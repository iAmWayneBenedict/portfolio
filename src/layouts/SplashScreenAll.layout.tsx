import React, { useEffect } from "react";
import { motion, LayoutGroup } from "framer-motion";
import gsap from "gsap";
interface Props {
	setIsLoaded: React.Dispatch<React.SetStateAction<boolean>>;
}

const itemMain = {
	hidden: { opacity: 0, y: 200 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1.6,
		},
	},
};

const SplashScreenAll: React.FC<Props> = ({ setIsLoaded }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoaded(true);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	// useEffect(() => {
	// 	const timer = setTimeout(() => {
	// 		gsap.timeline()
	// 			.to(".brand-logo-splash", {
	// 				opacity: "0",
	// 				marginBottom: "100px",
	// 			})
	// 			.to(".loader", {
	// 				width: "100vw",
	// 				height: "100vh",
	// 				borderRadius: 0,
	// 			})
	// 			.to(".loader-fill", {
	// 				duration: 0,
	// 				borderRadius: 0,
	// 			})
	// 			.to(".loader-fill", {
	// 				duration: 0.6,
	// 				width: "100vw",
	// 				ease: "power3.inOut",
	// 			})
	// 			.to(".loader-fill", {
	// 				duration: 0.6,
	// 				height: "100vh",
	// 				borderRadius: 0,
	// 				ease: "power3.inOut",
	// 			})
	// 			.to(".loader-fill-curtain", {
	// 				duration: 0.6,
	// 				opacity: 1,
	// 				width: "100vw",
	// 				ease: "power3.inOut",
	// 			})
	// 			.to(".loader-fill-curtain", {
	// 				duration: 0.6,
	// 				height: "100vh",
	// 				ease: "power3.inOut",
	// 			})
	// 			.to(".brand-logo-splash", {
	// 				opacity: "1",
	// 				marginBottom: "0px",
	// 			});
	// 	}, 5000);

	// 	return () => clearTimeout(timer);
	// }, []);

	return (
		<div className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-white z-[1000]"></div>
	);
};

export default SplashScreenAll;
