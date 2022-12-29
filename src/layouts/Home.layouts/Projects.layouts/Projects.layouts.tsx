import React from "react";
import Title from "../../../components/ui/Title.component";

const Projects = () => {
	return (
		<div className="mt-96 tracking-wide pb-64">
			<div className="relative mx-20">
				<Title name="projects" />
				<div className="absolute bg-black right-0 bottom-[-250%] w-[40rem] h-[30rem] flex justify-center items-center">
					<a href="#" className="text-white">
						Explore all projects
					</a>
				</div>
			</div>
			<div className="flex border-t border-b border-black mt-64 bg-white h-[50rem]">
				<div className="left border-r border-black basis-[13rem]">
					<div className="icons flex justify-around mt-8 mb-10">
						<img src="/src/assets/svg/arrow-left.svg" className="w-8" alt="" />
						<img src="/src/assets/svg/arrow-right.svg" className="w-8" alt="" />
					</div>
					<div className="flex justify-center">
						<h1 className="current text-7xl font-[900]">3</h1>
						<div className="all text-2xl mt-2">/5</div>
					</div>
				</div>
				<div className="right flex-1">asd</div>
			</div>
		</div>
	);
};

export default Projects;
