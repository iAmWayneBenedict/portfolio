import Title from "../../../components/ui/Title.component";
import Dot from "./Dot.component";
import TimelineEvent from "./TimelineEvent.component";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { isBrowser, isMobile, isTablet } from "react-device-detect";

const Journey = () => {
	gsap.registerPlugin(ScrollTrigger);
	return (
		<div className="mt-56 tracking-wide ">
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
				<div className="h-[45rem] flex mt-32 gap-10 relative">
					<div className="basis-[49%] hidden flex-col md:flex">
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
					<Dot />
					<div className="basis-[49%] flex flex-col">
						<TimelineEvent
							position="right"
							isEmpty={false}
							data={{ year: "2013", desc: "Lorem ipsum dolor sit amet." }}
						/>

						<TimelineEvent position="right" isEmpty={true} />
						{/*
						{isMobile && isTablet && (
							<TimelineEvent
								position="right"
								isEmpty={false}
								data={{ year: "2017", desc: "Lorem ipsum dolor sit amet." }}
							/>
						)} */}

						<TimelineEvent
							position="right"
							isEmpty={false}
							data={{ year: "2019", desc: "Lorem ipsum dolor sit amet." }}
						/>

						<TimelineEvent position="right" isEmpty={true} />

						{/* 
						{isMobile && isTablet && (
							<TimelineEvent
								position="right"
								isEmpty={false}
								data={{ year: "PRESENT", desc: "Lorem ipsum dolor sit amet." }}
							/>
						)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Journey;
