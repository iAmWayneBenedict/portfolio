import { useEffect, useState, useRef } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";
import Cursor from "./components/ui/Cursor.component";
import useSmoothScroll from "./hooks/useSmoothScroll";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import SplashScreen from "./layouts/SplashScreen.layout";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { BrowserView } from "react-device-detect";
import Menu from "./components/ui/Menu.component";
import { useCallback } from "react";
import handleMenu from "./utils/handleMenu";

function App() {
	const [isLoaded, setIsLoaded] = useState(false);
	const menu = useRef<HTMLDivElement>(null);
	const rHistory = useRef<HTMLButtonElement>(null);

	const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
	const icon: HTMLLinkElement = document.querySelector("link[rel=icon]") as HTMLLinkElement;

	useEffect(() => {
		isDarkMode().matches
			? icon?.setAttribute("href", "/logo-darkmode.svg")
			: icon?.setAttribute("href", "/logo-lightmode.svg");
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
					<Menu useReference={menu} historyReturn={rHistory} />
					<Nav handleNavbar={handleNavbar} />
					<Home />
				</div>
			</div>
		</AnimatePresence>
	);
}

export default App;
