import { useEffect, useState, useRef } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

// locomotive scroll css
import "locomotive-scroll/dist/locomotive-scroll.min.css";

function App() {
	const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

	const icon: HTMLLinkElement = document.querySelector("link[rel=icon]") as HTMLLinkElement;

	useEffect(() => {
		isDarkMode().matches
			? icon?.setAttribute("href", "/logo-darkmode.svg")
			: icon?.setAttribute("href", "/logo-lightmode.svg");
	}, []);

	gsap.registerPlugin(ScrollTrigger);

	let d = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const locoScroll = new LocomotiveScroll({
			el: d.current as HTMLDivElement,
			smooth: true,
			multiplier: 0.75,
		});
	}, []);

	return (
		<div className="App" ref={d}>
			<div id="smooth-wrapper">
				<Nav />
				<Home />
			</div>
		</div>
	);
}

export default App;
