import React from "react";
interface Props {
	index: number;
	name: string;
	value: string;
	categoryData: any;
}
const Category: React.FC<Props> = ({ index, name, value, categoryData }) => {
	return (
		<div
			className="flex flex-row items-center gap-3 md:gap-10 overflow-hidden"
			style={{ fontSize: "clamp(1.25rem, 3vw, 2.25rem)" }}
			key={index + name}
		>
			<button
				type="button"
				data-name={name}
				className="project-category italic transition-opacity duration-250 ease-linear"
			>
				{value}
			</button>
			{index !== categoryData.length - 1 ? (
				<div className="h-[1px] md:h-[3px] w-[20px] lg:w-[40px]">
					<div className="line-category h-full w-full transition-opacity duration-250 ease-linear bg-black"></div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Category;
