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
	return (
		<>
			<Root />
		</>
	);
}

const Root = () => {
	const [isLoaded, setIsLoaded] = useState(false);
	const menu = useRef<HTMLDivElement>(null);
	const rHistory = useRef<HTMLButtonElement>(null);

	const isDarkMode = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
	const icon: HTMLLinkElement = document.querySelector("link[rel=icon]") as HTMLLinkElement;

	useEffect(() => {
		isDarkMode().matches
			? icon?.setAttribute("href", "/assets/svg/logo-darkmode.svg")
			: icon?.setAttribute("href", "/assets/svg/logo-lightmode.svg");
	}, []);

	useSmoothScroll(true);

	// gsap.config({
	// 	nullTargetWarn: false,
	// });

	const handleNavbar = useCallback(
		(isActive: boolean = false, setActive: React.Dispatch<React.SetStateAction<boolean>>) => {
			handleMenu({ isActive, menu, rHistory, setActive });
		},
		[]
	);

	return (
		<AnimatePresence>
			<div className="App bg-white h-screen relative">
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
				<button
					id="scroll-to-top-btn"
					className="fixed bottom-[5rem] right-[-150%] w-[7rem] h-[7rem] bg-white text-black border-none rounded-full cursor-pointer mix-blend-difference transition-all duration-[1.5s] hover:bg-[#666]"
					title="Scroll to top"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="70"
						height="70"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="feather feather-arrow-up m-auto"
					>
						<line x1="12" y1="19" x2="12" y2="5"></line>
						<polyline points="5 12 12 5 19 12"></polyline>
					</svg>
				</button>
			</div>
		</AnimatePresence>
	);
}

export default App;
