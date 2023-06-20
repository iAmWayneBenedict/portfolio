import React, { useEffect, useState, useRef } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";
import Cursor from "./components/ui/Cursor.component";
import useSmoothScroll from "./hooks/useSmoothScroll";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import SplashScreen from "./layouts/SplashScreen.layout";
import SplashScreenAll from "./layouts/SplashScreenAll.layout";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { BrowserView } from "react-device-detect";
import Menu from "./components/ui/Menu.component";
import { useCallback } from "react";
import handleMenu from "./utils/handleMenu";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Projects from "./pages/Projects.page";

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
	const rHistory = useRef<HTMLButtonElement>(null);
	let path = useLocation();

	const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
	const icon: HTMLLinkElement = document.querySelector("link[rel=icon]") as HTMLLinkElement;

	useEffect(() => {
		// setDOMLoaded(true);
		console.log(path.pathname);
		isDarkMode().matches
			? icon?.setAttribute("href", "/assets/svg/logo-darkmode.svg")
			: icon?.setAttribute("href", "/assets/svg/logo-lightmode.svg");
	}, []);

	useSmoothScroll(true);

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
			<div className="App bg-white h-screen relative">
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
				<div className="cursor h-screen">
					<Menu useReference={menu} historyReturn={rHistory} />
					<Nav handleNavbar={handleNavbar} />
					<div className="bg-con overflow-hidden" style={{ backgroundColor: "white" }}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/projects" element={<Projects />} />
						</Routes>
					</div>
				</div>
				<button
					id="scroll-to-top-btn"
					className="fixed bottom-[3rem] right-[-150%] lg:bottom-[5rem] lg:right-[-150%] w-[5rem] h-[5rem] lg:w-[7rem] lg:h-[7rem] bg-white text-black border-none rounded-full cursor-pointer mix-blend-difference transition-all duration-[1.5s] hover:bg-[#666]"
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

export default App;
