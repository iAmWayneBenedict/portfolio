import React from "react";
import Line from "../../../components/ui/Line.component";

const AboutSection = () => {
	return (
		<div className="flex flex-col mt-96">
			<Line position="mr-auto" color="bg-gray-300" colorHighlight="after:bg-black" />
			<div className="container mx-auto px-10 my-24">
				<p className="text-base sm:text-xl md:text-2xl tracking-wide">
					Lorem ipsum dolor sit amet consectetur. Risus elementum nibh non semper
					penatibus porttitor tempus. Ullamcorper at arcu massa amet. Ac nec tempor
					euismod amet id vel etiam. Suspendisse viverra nisl ac et fusce eu lacinia
					tortor tellus. Amet sed lobortis est ultrices donec enim ullamcorper. Odio morbi
					purus odio eu.
				</p>
			</div>
			<Line position="ml-auto" color="bg-gray-300" colorHighlight="after:bg-black" />
		</div>
	);
};

export default AboutSection;
