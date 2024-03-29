import React from "react";

import Scrollbar, { ScrollbarPlugin } from "smooth-scrollbar";
import { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const useSmoothScroll = (start: boolean) => {
	const [a, setA] = useState<any>(null);
	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		const scroller = document.querySelector(".cursor") as HTMLElement;
		// 3rd party library setup:
		const bodyScrollBar = Scrollbar.init(scroller, {
			damping: 0.05,
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

		if (document.querySelector(".gsap-marker-scroller-start")) {
			const markers = gsap.utils.toArray('[class *= "gsap-marker"]');
			const handleMarkers = ({ offset }: any) => {
				gsap.set(markers, { marginTop: -offset.y });
			};
			bodyScrollBar.addListener(handleMarkers);
		}

		// Get the "scroll to top" button element
		const scrollTopBtn = document.querySelector("#scroll-to-top-btn") as HTMLElement;

		const handleScrollTop = (status: { offset: { y: number } }) => {
			if (status.offset.y > 100) {
				scrollTopBtn.classList.add("active");
			} else {
				scrollTopBtn.classList.remove("active");
			}
		};
		// Show/hide the button based on scroll position
		bodyScrollBar.addListener(handleScrollTop);

		// Add a click event listener to the button
		scrollTopBtn.addEventListener("click", () => {
			// Smoothly scroll the scrollbar to the top
			bodyScrollBar.scrollTo(0, 0, 2000); // 3rd param is the duration of the animation in milliseconds
		});
		setA(bodyScrollBar);
		bodyScrollBar.track.xAxis.element.remove();
		return () => {
			bodyScrollBar.removeListener(ScrollTrigger.update);
			bodyScrollBar.removeListener(handleScrollTop);
		};
	}, [start]);

	return a;
};

export default useSmoothScroll;
