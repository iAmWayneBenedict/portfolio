import gsap from "gsap";
import React from "react";
import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import ModalPlugin from "./ModalPlugin";
import SplitType from "split-type";
import CustomEase from "gsap/CustomEase";

interface Params {
	isActive: boolean;
	menu: React.RefObject<HTMLDivElement>;
	rHistory: React.RefObject<HTMLButtonElement>;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

let tl = gsap.timeline();
let tl2 = gsap.timeline();
let tl3 = gsap.timeline();

Scrollbar.use(ModalPlugin);
gsap.registerPlugin(CustomEase);

const navAnim = (el: HTMLDivElement, isActive: boolean) => {
	const scroller = document.querySelector(".cursor") as HTMLElement;

	const right = el.querySelector(".left-menu") as HTMLDivElement;
	const topLeftMenu = el.querySelector(".top-left-menu") as HTMLDivElement;
	const bottomLeftMenu = el.querySelector(".bottom-left-menu") as HTMLDivElement;
	const menuBack = el.querySelector(".menu-back") as HTMLDivElement;
	const menuLinkText = el.querySelectorAll(".menu-link-text") as NodeListOf<HTMLElement>;
	const menuSocialsLeft = el.querySelector(".menu-socials-left") as HTMLDivElement;
	const menuSocialsRight = el.querySelector(".menu-socials-right") as HTMLDivElement;

	const bodyScrollBar = Scrollbar.init(scroller, {
		damping: 0.05,
		delegateTo: document,
		continuousScrolling: false,
	});

	tl.to(el, {
		opacity: 1,
		duration: 0.35,
		onReverseComplete: () => {
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
		});

	tl2.to(
		menuBack.firstElementChild,

		{
			opacity: 1,
			y: 0,
			delay: 0.35,
		}
	)
		.to(menuSocialsLeft.children[0], {
			opacity: 1,
			y: 0,
			duration: 0.35,
		})
		.to(
			menuSocialsLeft.children[1],
			{
				opacity: 1,
				y: 0,
				duration: 0.35,
			},
			"-=.25"
		)
		.to(
			menuSocialsLeft.children[2],
			{
				opacity: 1,
				y: 0,
				duration: 0.35,
			},
			"-=.25"
		)
		.to(menuSocialsRight, {
			opacity: 1,
		});
	let delay = 1;
	menuLinkText.forEach((el) => {
		tl3.to(
			el.firstElementChild,
			{
				y: 0,
				opacity: 1,
				duration: 0.35,
			},
			`-=${(delay -= 0.2)}`
		);
	});

	const stopScroll = (isClosed: boolean) =>
		bodyScrollBar.updatePluginOptions("modal", { open: isClosed });

	if (!isActive) {
		tl3.reverse();
		tl2.reverse();
		tl.reverse();

		tl3 = gsap.timeline();
		tl2 = gsap.timeline();
		tl = gsap.timeline();

		stopScroll(isActive);
	} else {
		stopScroll(isActive);
	}
};

const menuStyle = (isActive: boolean, menu: React.RefObject<HTMLDivElement>) => {
	if (!isActive) {
		navAnim(menu.current!, isActive);
		return;
	}

	menu.current!.classList.remove("hidden");
	menu.current!.classList.add("flex");
	navAnim(menu.current!, isActive);
};

const handleMenu = (params: Params): void => {
	let { isActive, menu, rHistory, setActive } = params;

	rHistory.current!.addEventListener("click", (event) => {
		let top = document.querySelector(".hamburger")!.children[0] as HTMLSpanElement;
		let bottom = document.querySelector(".hamburger")!.children[1] as HTMLSpanElement;
		let nav = document.querySelector("nav")! as HTMLElement;

		if (nav.classList.contains("bg-[black]") || nav.style.background === "black") {
			top.classList.remove("bg-[black]");
			top.classList.add("bg-white");
			bottom.classList.remove("bg-[black]");
			bottom.classList.add("bg-white");
		} else {
			top.classList.remove("bg-white");
			top.classList.add("bg-[black]");
			bottom.classList.remove("bg-white");
			bottom.classList.add("bg-[black]");
		}

		top.style.top = "3px";
		bottom.style.bottom = "3px";

		top.style.transform = "rotate(0deg)";
		bottom.style.transform = "rotate(0deg)";

		setActive(false);

		menuStyle(false, menu);
	});

	menuStyle(isActive, menu);
};

export default handleMenu;
