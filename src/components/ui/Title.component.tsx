import React from "react";

interface Props {
	name: string;
}

const Title: React.FC<Props> = ({ name }) => {
	return (
		<div className="relative z-10">
			<h1 className="text-[45px] sm:text-[70px] md:text-[80px] lg:text-[90px] font-[900] font-neueMontreal">
				{name.toUpperCase()}
			</h1>
			<h1 className="text-[120px] sm:text-[180px] md:text-[200px] lg:text-[300px] absolute left-0 top-3 md:top-5 font-[900] m-0 leading-none font-neueMontrealBold text-[#f1f1f1] -z-20">
				{name.toUpperCase()}
			</h1>
		</div>
	);
};

export default Title;
