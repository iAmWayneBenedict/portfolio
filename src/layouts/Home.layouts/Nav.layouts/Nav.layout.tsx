import React, { useEffect, useState } from "react";
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
	const location = useLocation();
	useEffect(() => {
		if (location.pathname !== "/") setDelay(false);
		if (location.pathname === "/") {
			if (!isLoaded) setDelay(true);
		}
	}, [location]);

	useEffect(() => {
		console.log(delay);
	});

	return (
		<nav className="px-5 sm:px-8 md:px-12 xl:px-16 2xl:px-24 pt-3 bg-white flex items-center">
			<ButtonOutline delay={delay ? "+=12" : "+=1.5"} reverse={reverse} />
			<BrandName delay={delay ? "11" : "1"} />
			<Hamburger delay={delay ? "+=10.5" : "+=.5"} handleNavbar={handleNavbar} />
		</nav>
	);
};

export default Nav;
