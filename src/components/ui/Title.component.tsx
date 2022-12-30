import React from "react";

interface Props {
	name: string;
}

const Title: React.FC<Props> = ({ name }) => {
	return (
		<div className="relative">
			<h1 className="text-[45px] sm:text-[70px] md:text-[80px] lg:text-[100px] font-[900] font-neueMontrealMedium">
				{name.toUpperCase()}
			</h1>
			<h1 className="text-[120px] sm:text-[180px] md:text-[200px] lg:text-[300px] absolute left-0 top-3 md:top-10 font-[900] m-0 leading-none font-neueMontrealBold text-[#eeeeee] z-[-1]">
				{name.toUpperCase()}
			</h1>
		</div>
	);
};

export default Title;
