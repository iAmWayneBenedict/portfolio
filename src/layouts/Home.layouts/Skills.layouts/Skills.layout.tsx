import React from "react";
import Title from "../../../components/ui/Title.component";
import Card from "./Card.component";

const Skills = () => {
	return (
		<div className="mt-96 mx-20 tracking-wide">
			<p className="text-lg">A set of skills that is compatible with your needs.</p>
			<Title name="skills" />

			<div className="w-full flex gap-5 lg:gap-10 flex-wrap justify-evenly px-5 xl:px-20 mt-72">
				<Card
					classes="bg-white"
					src="/src/assets/svg/web.svg"
					title="Web Development"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!"
				/>
				<Card
					classes="bg-black text-white"
					src="/src/assets/svg/ui.svg"
					title="UI Design"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!"
				/>
				<Card
					classes="bg-black text-white"
					src="/src/assets/svg/api.svg"
					title="API Development"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!"
				/>
				<Card
					classes="bg-white"
					src="/src/assets/svg/auto.svg"
					title="Web Automation"
					description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, obcaecati!"
				/>
			</div>
		</div>
	);
};

export default Skills;
