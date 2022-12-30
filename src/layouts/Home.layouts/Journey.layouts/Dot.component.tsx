import React from "react";

interface Props {
	number: string;
	y_position: string;
}

const Dot: React.FC<Props> = ({ number, y_position }) => {
	let y_pos = `top-[${y_position}%]`;
	console.log(y_pos);
	return (
		<div
			className={`w-[25px] h-[25px] bg-white border-[14px] border-black absolute rounded-full left-1/2 -translate-x-1/2 ${y_pos} flex justify-center items-center`}
		>
			<span className="text-xl">{number}</span>
		</div>
	);
};

export default Dot;
