import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeCon = () => {
	return (
		<div className="mt-20">
			<div className="opacity-80 bg-black text-white py-12 border-t border-b text-6xl">
				<Marquee className="" speed={50}>
					<span className="mx-8">WAYNE</span>
					<span className="mx-8">WAYNE</span>
					<span className="mx-8">WAYNE</span>
					<span className="mx-8">WAYNE</span>
					<span className="mx-8">WAYNE</span>
					<span className="mx-8">WAYNE</span>
					<span className="mx-8">WAYNE</span>
				</Marquee>
			</div>
		</div>
	);
};

export default MarqueeCon;
