import React from "react";
import ScrollDown from "./ScrollDown.component";

const Hero = () => {
	return (
		<div>
			<div className="flex flex-col gap-5 items-center text-[25px] sm:text-[42px] md:text-5xl lg:text-6xl xl:text-[90px] justify-end h-[50vh] sm:h-[50vh] xl:h-[65vh] leading-tight pointer-events-none">
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
