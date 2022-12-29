import React from "react";

const ScrollDown = () => {
	return (
		<div className="flex flex-col items-center my-10">
			<span className="line-center h-[100px] w-[2px] bg-black"></span>
			<span className="dot-center h-[4px] w-[4px] bg-black mt-5 rounded-full"></span>
			<span className="mt-10">Scroll Down</span>
		</div>
	);
};

export default ScrollDown;
