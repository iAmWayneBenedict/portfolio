import React from "react";
import BrandName from "../../../components/ui/BrandName.component";
import ButtonOutline from "../../../components/forms/ButtonOutline.component";
import Hamburger from "./Hamburger.component";

interface Props {
	handleNavbar: (
		isActive: boolean,
		setActive: React.Dispatch<React.SetStateAction<boolean>>
	) => void;
	reverse?: boolean;
}

const Nav: React.FC<Props> = ({ handleNavbar, reverse }) => {
	return (
		<nav className="px-3 pt-3 container mx-auto flex items-center">
			<ButtonOutline reverse={reverse} />
			<BrandName />
			<Hamburger handleNavbar={handleNavbar} />
		</nav>
	);
};

export default Nav;
