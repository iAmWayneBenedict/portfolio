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

let isToggle: boolean = true;

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
			isToggle = true;
		},
		onComplete: () => {
			isToggle = true;
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
				duration: 0.5,
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
		handleHamburgerAnim(isActive, setActive);
	});

	menuStyle(isActive, menu);
};

export const handleHamburgerAnim = (
	active: boolean,
	setActive: React.Dispatch<React.SetStateAction<boolean>>
) => {
	if (!isToggle) return;
	if (tl.progress() > 0 && tl.progress() < 1) return;
	isToggle = false;
	let top = document.querySelector(".hamburger")!.children[0] as HTMLSpanElement;
	let bottom = document.querySelector(".hamburger")!.children[1] as HTMLSpanElement;
	let nav = document.querySelector("nav")! as HTMLElement;

	if (active) {
		top.style.top = "3px";
		bottom.style.bottom = "3px";
		top.style.transform = "rotate(0deg)";
		bottom.style.transform = "rotate(0deg)";

		setActive(false);
	} else {
		top.style.top = "50%";
		top.style.transform = "translateY(-50%)";

		bottom.style.bottom = "50%";
		bottom.style.transform = "translateY(-50%)";

		setActive(true);
	}
	let dark: boolean;
	let pathname = window.location.pathname;
	if (
		pathname === "/contact" ||
		pathname === "/about" ||
		pathname === "/skills" ||
		pathname === "/timeline"
	) {
		dark = true;
	} else {
		dark = false;
	}
	if (dark && (top.classList.contains("bg-[black]") || top.style.background === "black")) {
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
};

export default handleMenu;
