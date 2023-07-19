import React, { useEffect, useState } from "react";
import data from "../../utils/data";

interface Props {
	index: number;
	name: string;
	value: string;
	categoryData: any;
}
const Category: React.FC<Props> = ({ index, name, value, categoryData }) => {
	const [count, setCount] = useState<number>(0);
	useEffect(() => {
		let projectsCount: any[] = [];
		let designsCount: any[] = [];
		if (name === "all") {
			projectsCount = data.projects;
			designsCount = data.designs;
		} else {
			projectsCount = data.projects.filter((el, index) => el.category.includes(name));
			designsCount = data.designs.filter((el, index) => el.category.includes(name));
		}
		setCount([...projectsCount, ...designsCount].length);
	}, []);
	return (
		<div
			className="flex flex-row items-center gap-3 md:gap-10 relative overflow-hidden"
			style={{ fontSize: "clamp(1.25rem, 2.25vw, 2.25rem)" }}
			key={index + name}
		>
			<button
				type="button"
				data-name={name}
				className="project-category relative italic transition-opacity duration-250 ease-linear"
			>
				{value}
				<span className="absolute top-0 -right-[1rem] text-xs md:text-base">({count})</span>
			</button>
			{index !== categoryData.length - 1 ? (
				<div className="h-[1px] md:h-[3px] w-[20px] lg:w-[40px]">
					<div className="line-category h-full w-full transition-opacity duration-250 ease-linear bg-[black]"></div>
				</div>
			) : (
				<div className="h-[1px] md:h-[3px] w-[20px] lg:w-[40px]">
					<div className="line-category h-full w-full transition-opacity duration-250 ease-linear bg-transparent"></div>
				</div>
			)}
		</div>
	);
};

export default Category;
