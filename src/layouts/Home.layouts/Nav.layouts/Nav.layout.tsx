import React from "react";
import BrandName from "../../../components/ui/BrandName.component";
import ButtonOutline from "../../../components/forms/ButtonOutline.component";
import Hamburger from "./Hamburger.component";

interface Props {
	isLoaded: boolean;
	handleNavbar: (
		isActive: boolean,
		setActive: React.Dispatch<React.SetStateAction<boolean>>
	) => void;
	reverse?: boolean;
}

const Nav: React.FC<Props> = ({ isLoaded, handleNavbar, reverse }) => {
	return (
		<nav className="px-5 sm:px-8 md:px-12 xl:px-16 2xl:px-24 pt-3 bg-white flex items-center">
			<ButtonOutline isLoaded={isLoaded} reverse={reverse} />
			<BrandName />
			<Hamburger isLoaded={isLoaded} handleNavbar={handleNavbar} />
		</nav>
	);
};

export default Nav;
