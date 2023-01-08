import React from "react";

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
	return (
		<div className={`${id} h-[2px] ${size} ${position} ${color} overflow-hidden`}>
			<div className={`${id}-fill h-full ${colorHighlight}`}></div>
		</div>
	);
};

export default Line;
