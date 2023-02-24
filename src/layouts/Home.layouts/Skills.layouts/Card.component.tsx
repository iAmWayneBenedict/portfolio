import React from "react";
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
			className="card-con w-full md:w-[45%] h-[30rem] md:h-[45rem]"
			onMouseOver={(e) => handleMouseOver(e)}
			onMouseOut={handleMouseOut}
		>
			<div className={`${classes} skills-con w-0 h-full`}>
				<div
					className="p-10 md:p-14 flex flex-col justify-between group"
					style={{ width: "inherit", height: "inherit" }}
				>
					<div className="title-con opacity-0">
						<div className="logo w-[70px]">
							<img
								// className="transition-all group-hover:animate-[spin_10s_ease_infinite_forwards]"
								className=""
								src={src}
								alt={src}
							/>
						</div>
						<h1 className="text-bold text-3xl mt-10">{title}</h1>
					</div>
					<div className="desc pb-10 md:pb-16 opacity-0">
						<p className="text-base">{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
