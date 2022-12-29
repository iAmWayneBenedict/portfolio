import React from "react";
import Title from "../../../components/ui/Title.component";
import Card from "./Card.component";

const Skills = () => {
	return (
		<div className="mt-96 mx-20 tracking-wide">
			<p className="text-lg">A set of skills that is compatible with your needs.</p>
			<Title />

			<div className="w-full flex gap-10 flex-wrap justify-evenly px-20 mt-48">
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Skills;
