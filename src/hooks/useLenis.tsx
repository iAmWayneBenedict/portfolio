import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import { useEffect } from "react";

const useLenis = () => {
	gsap.registerPlugin(ScrollTrigger);
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});

		const raf = (time: number) => {
			lenis.raf(time);
			ScrollTrigger.update();
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);
	}, []);
};

export default useLenis;
