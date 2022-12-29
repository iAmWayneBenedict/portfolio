import React from "react";

interface Props {
	classes: string;
	src: string;
	title: string;
	description: string;
}

const Card: React.FC<Props> = ({ classes, src, title, description }) => {
	return (
		<div className={`${classes} w-[45%] p-14 h-[35rem] flex flex-col justify-between`}>
			<div>
				<div className="logo w-[70px]">
					<img src={src} alt={src} />
				</div>
				<h1 className="text-bold text-3xl mt-10">{title}</h1>
			</div>
			<div className="pb-20">
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Card;
