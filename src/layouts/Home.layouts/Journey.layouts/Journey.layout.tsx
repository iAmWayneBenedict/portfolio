import React from "react";
import Line from "../../../components/ui/Line.component";
import Title from "../../../components/ui/Title.component";
import Dot from "./Dot.component";
import TimelineEvent from "./TimelineEvent.component";

const Journey = () => {
	return (
		<div className="mt-32 tracking-wide pb-64">
			<div>
				<div className="relative px-5 md:px-20">
					<Title name="journey" />
				</div>
				<Line
					position="ml-auto"
					color="bg-gray-200"
					colorHighlight="after:bg-black"
					size="w-[20rem]"
				/>
			</div>
			<div className="mt-72 flex flex-col">
				<div className="flex justify-center">
					<h4 className="text-lg">
						Take a single step at a time. Make it short yet fulfilling.
					</h4>
				</div>
				<div className="h-[45rem] flex mt-32 gap-10">
					<div className="basis-[49%] flex flex-col">
						<TimelineEvent position="left" isEmpty={true} />
						<TimelineEvent
							position="left"
							isEmpty={false}
							data={{ year: "2017", desc: "Lorem ipsum dolor sit amet." }}
						/>
						<TimelineEvent position="left" isEmpty={true} />
						<TimelineEvent
							position="left"
							isEmpty={false}
							data={{ year: "PRESENT", desc: "Lorem ipsum dolor sit amet." }}
						/>
					</div>
					<div className="w-[5px] h-full bg-black rounded-lg relative flex flex-col justify-evenly">
						{[
							["01", "10"],
							["02", "35"],
							["03", "60"],
							["04", "85"],
						].map(([val1, val2]) => (
							<Dot number={`${val1}`} key={val1} y_position={`${val2}`} />
						))}
					</div>
					<div className="basis-[49%] flex flex-col">
						<TimelineEvent
							position="right"
							isEmpty={false}
							data={{ year: "2013", desc: "Lorem ipsum dolor sit amet." }}
						/>
						<TimelineEvent position="right" isEmpty={true} />
						<TimelineEvent
							position="right"
							isEmpty={false}
							data={{ year: "2019", desc: "Lorem ipsum dolor sit amet." }}
						/>
						<TimelineEvent position="right" isEmpty={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Journey;
