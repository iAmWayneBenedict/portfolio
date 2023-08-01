import React from "react";
import { isMobile } from "react-device-detect";
import CustomLink from "../../components/ui/CustomLink";
interface Props {
	index: number;
	isMobileView: boolean;
	projectsLength: number;
	project: any;
}
const ProjectsDetail: React.FC<Props> = ({ index, isMobileView, projectsLength, project }) => {
	return (
		<div
			className={`${
				index % 3 === 0 && !isMobileView ? "col-span-2" : ""
			} mt-5 lg:mt-14 h-fit`}
			key={index}
		>
			<CustomLink
				className="project-con"
				to={(index < projectsLength ? "/projects/" : "/designs/") + project.URIName}
			>
				<div className="project-imgCon relative w-full h-full max-h-[70rem] overflow-hidden">
					<img
						className="w-full h-full object-cover object-center"
						src={project.thumbnail}
						alt={project.thumbnail}
					/>
					{index !== 0 && (
						<div className="absolute top-0 right-0 bg-white w-full h-full"></div>
					)}
				</div>
				<div className="mt-8">
					<h1 className="text-xl lg:text-2xl xl:text-4xl font-bold font-neueMontrealRegular">
						{project.name + "."}
					</h1>
					<p className="mt-1 md:mt-3 text-base lg:text-xl max-w-3xl leading-relaxed">
						{project.type}
					</p>
				</div>
			</CustomLink>
		</div>
	);
};

export default ProjectsDetail;
