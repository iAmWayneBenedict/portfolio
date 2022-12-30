import React from "react";

interface Props {
	position: string;
	isEmpty: boolean;
	data?: Data;
}

interface Data {
	year: string;
	desc: string;
}

const TimelineEvent: React.FC<Props> = ({ position, isEmpty, data }) => {
	let parentEl: string;
	let childH1: string;
	let childSpan: string;
	if (position === "left") {
		parentEl = " pr-5 justify-end";
		childH1 = "order-2";
		childSpan = "order-1";
	} else {
		parentEl = " pl-5";
		childH1 = "order-1";
		childSpan = "order-2";
	}

	console.log(data);
	return (
		<>
			{!isEmpty && (
				<div className={`flex-1 flex items-center gap-10 ${parentEl}`}>
					<h1 className={`text-4xl font-neueMontrealBold ${childH1}`}>{data?.year}</h1>
					<span className={childSpan}>{data?.desc}</span>
				</div>
			)}
			{isEmpty && <div className="flex-1 flex items-center"></div>}
		</>
	);
};

export default TimelineEvent;
