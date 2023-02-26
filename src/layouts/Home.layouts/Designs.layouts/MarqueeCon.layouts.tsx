import React, { useRef } from "react";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import MarqueeText from "./MarqueeText.layouts";

const MarqueeCon = () => {
	return (
		<div className="mt-20">
			<div className="mousemove marquee-container opacity-80 bg-black text-white py-12 border-t border-b text-6xl">
				<Marquee className="overflow-y-hidden cursor-default whitespace-nowrap" speed={50}>
					<MarqueeText />
				</Marquee>
			</div>
		</div>
	);
};

export default MarqueeCon;