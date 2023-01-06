import React from "react";
import { useEffect, useRef } from "react";

interface Props {
	number: string;
	y_position: string;
	isActive?: boolean;
}

// REDUCE BORDER SIZE TO REVEAL NUMBER

const Dot: React.FC<Props> = ({ number, y_position, isActive = false }) => {
	const dotCon = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!dotCon.current) return;

		if (isActive) {
			dotCon.current.classList.remove("w-[25px]");
			dotCon.current.classList.remove("h-[25px]");
			dotCon.current.classList.remove("border-[14px]");
			dotCon.current.classList.add("border-[2px]");
			dotCon.current.classList.add("w-[35px]");
			dotCon.current.classList.add("h-[35px]");

			return;
		}

		dotCon.current.classList.add("w-[25px]");
		dotCon.current.classList.add("h-[25px]");
		dotCon.current.classList.add("border-[14px]");
		dotCon.current.classList.remove("border-[2px]");
		dotCon.current.classList.remove("w-[35px]");
		dotCon.current.classList.remove("h-[35px]");
	}, [isActive]);

	return (
		<div
			ref={dotCon}
			className={`w-[25px] h-[25px] bg-white border-[14px] border-black absolute rounded-full left-1/2 -translate-x-1/2 ${y_position} flex justify-center items-center`}
		>
			<span className="text-lg">{number}</span>
		</div>
	);
};

export default Dot;
