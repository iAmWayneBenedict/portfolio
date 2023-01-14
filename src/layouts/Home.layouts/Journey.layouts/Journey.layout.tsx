import React from "react";
import Line from "../../../components/ui/Line.component";
import Title from "../../../components/ui/Title.component";
import Dot from "./Dot.component";
import TimelineEvent from "./TimelineEvent.component";

const Journey = () => {
	return (
		<div className="mt-96 tracking-wide ">
			<div>
				<div className="relative px-5 md:px-20">
					<Title name="journey" />
				</div>
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
						<Dot number="01" y_position="top-[10%]" isActive={true} />
						<Dot number="02" y_position="top-[35%]" />
						<Dot number="03" y_position="top-[60%]" />
						<Dot number="04" y_position="top-[85%]" />
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
