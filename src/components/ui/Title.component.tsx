import React from "react";

interface Props {
	name: string;
}

const Title: React.FC<Props> = ({ name }) => {
	return (
		<div className="relative">
			<h1 className="text-[100px] font-bold">{name.toUpperCase()}</h1>
			<h1 className="text-[300px] absolute left-0 top-10 font-[900] m-0 leading-none font-neueMontrealBold text-[#E8E8E8] z-[-1]">
				{name.toUpperCase()}
			</h1>
		</div>
	);
};

export default Title;
