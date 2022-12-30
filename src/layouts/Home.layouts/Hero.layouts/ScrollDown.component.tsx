import React from "react";

const ScrollDown = () => {
	return (
		<div className="flex flex-col items-center my-20">
			<span className="line-center h-[50px] md:h-[100px] w-[1px] md:w-[2px] bg-black"></span>
			<span className="dot-center h-[2px] md:h-[4px] w-[2px] md:w-[4px] bg-black mt-5 rounded-full"></span>
			<span className="mt-10 opacity-70 cursor-pointer">Scroll Down</span>
		</div>
	);
};

export default ScrollDown;
