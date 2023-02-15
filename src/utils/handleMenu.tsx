import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import ModalPlugin from "./ModalPlugin";

interface Params {
	isActive: boolean;
	menu: React.RefObject<HTMLDivElement>;
}

let tl = gsap.timeline();
let tl2 = gsap.timeline();
Scrollbar.use(ModalPlugin);

const navAnim = (el: HTMLDivElement, isActive: boolean) => {
	const scroller = document.querySelector(".cursor") as HTMLElement;
	const right = el.querySelector(".left-menu") as HTMLDivElement;
	const topLeftMenu = el.querySelector(".top-left-menu") as HTMLDivElement;
	const bottomLeftMenu = el.querySelector(".bottom-left-menu") as HTMLDivElement;
	const menuBack = el.querySelector(".menu-back") as HTMLDivElement;
	const bodyScrollBar = Scrollbar.init(scroller, {
		damping: 0.05,
		delegateTo: document,
		continuousScrolling: false,
	});

	tl.to(el, {
		opacity: 1,
		duration: 0.35,
		onComplete: () => {
			if (isActive) return;
			el.classList.remove("flex");
			el.classList.add("hidden");
		},
	})
		.to(right, {
			height: "100%",
		})
		.to(topLeftMenu, {
			opacity: 1,
		})
		.to(bottomLeftMenu, {
			opacity: 1,
		})
		.to(topLeftMenu.firstElementChild, {
			x: 0,
		});

	tl2.fromTo(
		menuBack.firstElementChild,
		{
			opacity: 0,
			y: -10,
		},
		{
			opacity: 1,
			y: 0,
			delay: 0.35,
		}
	);

	const stopScroll = (isClosed: boolean) =>
		bodyScrollBar.updatePluginOptions("modal", { open: isClosed });

	if (!isActive) {
		tl.reverse();
		tl = gsap.timeline();
		tl2.reverse();
		tl2 = gsap.timeline();
		stopScroll(isActive);
		console.log(isActive);
	} else {
		stopScroll(isActive);
	}
};

const handleMenu = (params: Params): void => {
	let { isActive, menu } = params;

	if (!isActive) {
		navAnim(menu.current!, isActive);
		return;
	}

	menu.current!.classList.remove("hidden");
	menu.current!.classList.add("flex");
	navAnim(menu.current!, isActive);
};

export default handleMenu;
