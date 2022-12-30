import React from "react";

interface Props {
	position: string;
	color: string;
	colorHighlight: string;
	size?: string;
}

/*
	@params: tailwindcss classes
	
	includes pseudo elements
*/

const Line: React.FC<Props> = ({ position, color, colorHighlight, size = "w-2/3 sm:w-1/3" }) => {
	return (
		<div
			className={`h-[2px] ${size} ${position} ${color} overflow-hidden relative after:absolute after:content-[""] after:top-0 after:left-0 after:w-full after:h-full ${colorHighlight}`}
		></div>
	);
};

export default Line;
