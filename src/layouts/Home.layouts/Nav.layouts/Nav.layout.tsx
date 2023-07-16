import React, { useEffect, useRef, useState } from "react";
import BrandName from "../../../components/ui/BrandName.component";
import ButtonOutline from "../../../components/forms/ButtonOutline.component";
import Hamburger from "./Hamburger.component";
import { useLocation } from "react-router-dom";

interface Props {
	isLoaded: boolean;
	handleNavbar: (
		isActive: boolean,
		setActive: React.Dispatch<React.SetStateAction<boolean>>
	) => void;
	reverse?: boolean;
}

const Nav: React.FC<Props> = ({ isLoaded, handleNavbar, reverse }) => {
	const [delay, setDelay] = useState<boolean>(true);
	const [dark, setDark] = useState<boolean>(false);
	const nav = useRef<HTMLElement>(null);
	const location = useLocation();
	useEffect(() => {
		if (location.pathname !== "/") setDelay(false);
		if (location.pathname === "/") {
			if (!isLoaded) setDelay(true);
		}
	}, [location]);

	useEffect(() => {
		if (
			location.pathname === "/contact" ||
			location.pathname === "/about" ||
			location.pathname === "/skills" ||
			location.pathname === "/timeline"
		) {
			nav.current!.classList.remove("bg-white");
			nav.current!.classList.add("bg-[black]");
			setDark(true);
		} else {
			nav.current!.classList.add("bg-white");
			nav.current!.classList.remove("bg-[black]");
			setDark(false);
		}

		return () => {
			setDark(false);
		};
	}, [location.pathname]);

	useEffect(() => {
		console.log(dark);
	}, [dark]);

	return (
		<nav
			ref={nav}
			className="px-5 sm:px-8 md:px-12 xl:px-16 2xl:px-24 pt-3 bg-white flex items-center"
		>
			<ButtonOutline dark={dark} delay={delay ? "+=12" : "+=1.5"} reverse={reverse} />
			<BrandName dark={dark} delay={delay ? "11" : "1"} />
			<Hamburger dark={dark} delay={delay ? "+=10.5" : "+=.5"} handleNavbar={handleNavbar} />
		</nav>
	);
};

export default Nav;
