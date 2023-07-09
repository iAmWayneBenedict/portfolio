import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";
import Cursor from "./components/ui/Cursor.component";
import useSmoothScroll from "./hooks/useSmoothScroll";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import SplashScreen from "./layouts/SplashScreen.layout";
import SplashScreenAll from "./layouts/SplashScreenAll.layout";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserView } from "react-device-detect";
import Menu from "./components/ui/Menu.component";
import { useCallback } from "react";
import handleMenu from "./utils/handleMenu";
import { BrowserRouter, Route, Routes, redirect, useLocation, useNavigate } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Projects from "./pages/Projects.page";
import Lenis from "@studio-freight/lenis";
import Project from "./pages/Project.page";

function App() {
	return (
		<BrowserRouter>
			<Root />
		</BrowserRouter>
	);
}

function Root() {
	const [isLoaded, setIsLoaded] = useState(false);
	const menu = useRef<HTMLDivElement>(null);
	const scroller = useRef<HTMLDivElement>(null);
	const app = useRef<HTMLDivElement>(null);
	const rHistory = useRef<HTMLButtonElement>(null);
	let path = useLocation();
	const navigate = useNavigate();

	const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
	const icon: HTMLLinkElement = document.querySelector("link[rel=icon]") as HTMLLinkElement;

	useEffect(() => {
		isDarkMode().matches
			? icon?.setAttribute("href", "/assets/svg/logo-darkmode.svg")
			: icon?.setAttribute("href", "/assets/svg/logo-lightmode.svg");
	}, []);

	gsap.config({
		nullTargetWarn: false,
	});

	const handleNavbar = useCallback(
		(isActive: boolean = false, setActive: React.Dispatch<React.SetStateAction<boolean>>) => {
			handleMenu({ isActive, menu, rHistory, setActive });
		},
		[]
	);

	return (
		<AnimatePresence>
			<div className="App bg-white h-screen w-full relative" ref={app}>
				<Scroller />
				{!isLoaded && path.pathname === "/" && (
					// <div className="h-full relative">
					<SplashScreen setIsLoaded={setIsLoaded} />
					// </div>
				)}
				{!isLoaded && path.pathname !== "/" && (
					// <div className="h-full relative">
					<SplashScreenAll setIsLoaded={setIsLoaded} />
					// </div>
				)}

				<RemoveScrollBar />
				<BrowserView>
					<Cursor />
				</BrowserView>
				<div className="cursor h-screen w-full" ref={scroller}>
					<Menu useReference={menu} historyReturn={rHistory} />
					<Nav isLoaded={isLoaded} handleNavbar={handleNavbar} />
					<div className="bg-con" style={{ backgroundColor: "white" }}>
						<Routes>
							<Route path="/" element={<Home isLoaded={isLoaded} />} />
							<Route path="/:category" element={<Projects />} />
							<Route path="/:category/:name" element={<Project />} />
						</Routes>
					</div>
				</div>
				<button
					id="scroll-to-top-btn"
					className="fixed bottom-[3rem] right-[-150%] lg:bottom-[5rem] lg:right-[-150%] w-[4rem] h-[4rem] lg:w-[7rem] lg:h-[7rem] bg-white text-black border-none rounded-full cursor-pointer mix-blend-difference transition-all duration-[1.5s] hover:bg-[#666]"
					title="Scroll to top"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-arrow-up m-auto w-1/2"
					>
						<line x1="12" y1="19" x2="12" y2="5"></line>
						<polyline points="5 12 12 5 19 12"></polyline>
					</svg>
				</button>
				<Analytics />
			</div>
		</AnimatePresence>
	);
}

{
	/* ---------------------------------------------------------------------- */
}

// Solved re-render  conflict between gsap and framer motion

// DO NOT DELETE THE CODE BLOCK BELOW

const Scroller = () => {
	let smoothScrollbarHook = useSmoothScroll(true);
	let path = useLocation();
	useLayoutEffect(() => {
		if (smoothScrollbarHook) {
			smoothScrollbarHook.scrollTo(0, 0, 0);
		}
	}, [path.pathname]);

	return <></>;
};

// 	END OF CODE BLOCK

{
	/* ---------------------------------------------------------------------- */
}

export default App;
