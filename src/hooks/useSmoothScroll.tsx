import React from "react";

import Scrollbar from "smooth-scrollbar";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useSmoothScroll = (start: boolean) => {
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		const scroller = document.querySelector(".cursor") as HTMLElement;
		// 3rd party library setup:
		const bodyScrollBar = Scrollbar.init(scroller, {
			damping: 0.1,
			delegateTo: document,
			continuousScrolling: false,
		});

		// Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
		ScrollTrigger.scrollerProxy(scroller, {
			scrollTop(value) {
				if (arguments.length) {
					bodyScrollBar.scrollTop = value || 1; // setter
				}
				return bodyScrollBar.scrollTop; // getter
			},
			getBoundingClientRect() {
				return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
			},
		});

		// when the smooth scroller updates, tell ScrollTrigger to update() too:
		bodyScrollBar.addListener(ScrollTrigger.update);

		ScrollTrigger.defaults({ scroller: scroller });
	}, [start]);
};

export default useSmoothScroll;
