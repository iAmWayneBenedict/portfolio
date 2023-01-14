import React, { useRef } from "react";

interface Props {
	position: string;
	color: string;
	colorHighlight: string;
	size?: string;
	id?: string;
}

/*
	@params: tailwindcss classes
	
	includes pseudo elements
*/

const Line: React.FC<Props> = ({
	position,
	color,
	colorHighlight,
	size = "w-2/3 sm:w-1/3",
	id,
}) => {
	let rightLine: string = "";
	if (position === "ml-auto") {
		rightLine = "flex justify-end";
	}

	return (
		<div className={`${id} h-[1px] ${size} ${position} overflow-hidden ${rightLine}`}>
			<div className={`${id}-fill w-0 h-full ${colorHighlight}`}></div>
		</div>
	);
};

export default Line;
