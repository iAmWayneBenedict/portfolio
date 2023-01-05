import { useEffect, useState, useRef } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";

// locomotive scroll css
// import "locomotive-scroll/dist/locomotive-scroll.min.css";
import TextCursor from "./components/ui/TextCursor.component";
import Cursor from "./components/ui/Cursor.component";
import Scrollbar from "smooth-scrollbar";
import { SmoothProvider } from "react-smooth-scrolling";

function App() {
	const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

	const icon: HTMLLinkElement = document.querySelector("link[rel=icon]") as HTMLLinkElement;

	useEffect(() => {
		console.log(isDarkMode().matches);
		isDarkMode().matches
			? icon?.setAttribute("href", "/logo-darkmode.svg")
			: icon?.setAttribute("href", "/logo-lightmode.svg");
	}, []);

	gsap.registerPlugin(ScrollTrigger);

	let d = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!d.current) return;
		Scrollbar.init(d.current);
	}, []);

	// useLocoScroll(true);

	return (
		// <SmoothProvider skew={true}>
		<div className="App h-screen cursor-none bg-white">
			{/* <TextCursor /> */}
			<Cursor />
			<div className="cursor" ref={d}>
				<Nav />
				<Home />
			</div>
		</div>
		// </SmoothProvider>
	);
}

export default App;
