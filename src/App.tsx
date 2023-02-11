import { useEffect, useState, useRef } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";
import Cursor from "./components/ui/Cursor.component";
import useSmoothScroll from "./hooks/useSmoothScroll";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import SplashScreen from "./layouts/SplashScreen.layout";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import gsap from "gsap";
import { BrowserView } from "react-device-detect";
import useLenis from "./hooks/useLenis";
import Menu from "./components/ui/Menu.component";
import { useCallback } from "react";
import Preferences from "./utils/Preferences.utils";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const menu = useRef<HTMLDivElement>(null);

	const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
	const icon: HTMLLinkElement = document.querySelector("link[rel=icon]") as HTMLLinkElement;

	useEffect(() => {
		isDarkMode().matches
			? icon?.setAttribute("href", "/logo-darkmode.svg")
			: icon?.setAttribute("href", "/logo-lightmode.svg");
	}, []);

	useSmoothScroll(true);
	// useLenis();

	gsap.config({
		nullTargetWarn: false,
	});

	useEffect(() => {
		console.log("render");
	});

	let tl = gsap.timeline();
	const navAnim = (el: HTMLDivElement, isActive: boolean) => {
		tl.to(el, {
			opacity: 1,
			duration: 0.5,
		});

		if (!isActive) {
			tl.reverse();
			tl = gsap.timeline();
		}
	};

	const handleNavbar = useCallback((isActive: boolean = false) => {
		if (!isActive) {
			menu.current!.classList.add("hidden");
			navAnim(menu.current!, isActive);
			return;
		}

		menu.current!.classList.remove("hidden");
		navAnim(menu.current!, isActive);
	}, []);
	return (
		<AnimatePresence>
			<div className="App bg-white cursor-none h-screen relative">
				{!isLoaded && (
					// <div className="h-full relative">
					<SplashScreen setIsLoaded={setIsLoaded} />
					// </div>
				)}

				<RemoveScrollBar />
				<BrowserView>
					<Cursor />
				</BrowserView>
				<div className="cursor h-screen">
					<Menu useReference={menu} />
					<Nav handleNavbar={handleNavbar} />
					<Home />
				</div>
			</div>
		</AnimatePresence>
	);
}

export default App;
