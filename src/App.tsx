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

function App() {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

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
					<Nav />
					<Home />
				</div>
			</div>
		</AnimatePresence>
	);
}

export default App;
