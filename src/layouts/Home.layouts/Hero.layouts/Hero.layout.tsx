import React from "react";
import ScrollDown from "./ScrollDown.component";

const Hero = () => {
	return (
		<div>
			<div className="flex flex-col gap-5 items-center md:text-6xl lg:text-7xl justify-end h-[50vh] lg:h-[60vh] leading-tight pointer-events-none">
				<span>HI, I’M WAYNE</span>
				<span>A FULLSTACK DEVELOPER</span>
				<span>THAT CAN MAKE YOUR IDEAS</span>
				<span>INTO REALITY</span>
			</div>
			<ScrollDown />
		</div>
	);
};

export default Hero;
