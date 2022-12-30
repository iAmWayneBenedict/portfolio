import React from "react";
import { useRef } from "react";

interface Props {
	classes: string;
	src: string;
	title: string;
	description: string;
}

const Card: React.FC<Props> = ({ classes, src, title, description }) => {
	let rotate_0 = {
		transform: "rotateY(0deg)",
	};

	let rotate_180 = {
		transform: "rotateY(180deg)",
	};

	const handleMouseOver = (event: React.MouseEvent) => {
		// let element = event.currentTarget as HTMLDivElement;
		// let img = element.querySelector("img");
		// img?.setAttribute("style", "transform:rotateY(180deg)");
	};

	const handleMouseOut = (event: React.MouseEvent) => {
		// let element = event.currentTarget as HTMLDivElement;
		// let img = element.querySelector("img");
		// img?.setAttribute("style", "transform:rotateY(0deg)");
	};

	return (
		<div
			className={`${classes} w-full md:w-[45%] p-10 md:p-14 h-[30rem] md:h-[40rem] flex flex-col justify-between group`}
			onMouseOver={(e) => handleMouseOver(e)}
			onMouseOut={handleMouseOut}
		>
			<div>
				<div className="logo w-[70px]">
					<img
						className="transition-all group-hover:animate-[spin_10s_ease_infinite]"
						src={src}
						alt={src}
					/>
				</div>
				<h1 className="text-bold text-3xl mt-10">{title}</h1>
			</div>
			<div className="pb-10 md:pb-16">
				<p className="text-lg">{description}</p>
			</div>
		</div>
	);
};

export default Card;
