import { useEffect, useState, useRef } from "react";
import Home from "./pages/Home.page";
import Nav from "./layouts/Home.layouts/Nav.layouts/Nav.layout";
import Cursor from "./components/ui/Cursor.component";
import useSmoothScroll from "./hooks/useSmoothScroll";
import { RemoveScrollBar } from "react-remove-scroll-bar";
import SplashScreen from "./layouts/SplashScreen.layout";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

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

	return (
		<AnimatePresence>
			<div className="App cursor-none bg-white h-screen">
				{!isLoaded && (
					<motion.div key="loader" className="h-full relative">
						<SplashScreen setIsLoaded={setIsLoaded} />
					</motion.div>
				)}

				<RemoveScrollBar />
				<Cursor />
				<div className="cursor h-screen ">
					<Nav />
					<Home />
				</div>
			</div>
		</AnimatePresence>
	);
}

export default App;
