import React from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/data";

const Project = () => {
	const routeParams = useParams();
	console.log(getData("designs", routeParams.name));
	return (
		<div>
			<div>
				<video src="/assets/video/Promotional Video.mp4" autoPlay loop={true}></video>
			</div>
		</div>
	);
};

export default Project;
