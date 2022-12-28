import React from "react";
import BrandName from "./BrandName.component";
import ButtonOutline from "./ButtonOutline.component";
import Hamburger from "./Hamburger.component";

const Nav = () => {
	return (
		<nav className="px-3 mt-3 container mx-auto flex items-center">
			<ButtonOutline />
			<BrandName />
			<Hamburger />
		</nav>
	);
};

export default Nav;
