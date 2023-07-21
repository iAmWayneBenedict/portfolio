import React from "react";
import { forwardRef } from "react";

const Overlay = forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<div
			ref={ref}
			{...props}
			className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 backdrop-blur-sm z-[1000]"
		></div>
	);
});

export default Overlay;
