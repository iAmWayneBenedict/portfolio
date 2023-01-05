import React from "react";
import BrandName from "../../../components/ui/BrandName.component";
import ButtonOutline from "../../../components/forms/ButtonOutline.component";
import Hamburger from "./Hamburger.component";

const Nav = () => {
	return (
		<nav className="px-3 pt-3 container mx-auto flex items-center">
			<ButtonOutline />
			<BrandName />
			<Hamburger />
		</nav>
	);
};

export default Nav;
