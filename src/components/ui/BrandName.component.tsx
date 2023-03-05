import React from "react";

import { motion } from "framer-motion";

const BrandName = () => {
	return (
		<div className="flex-1 flex sm:justify-center mr-20 order-1 sm:order-2">
			<motion.a
				transition={{
					ease: [0.6, 0.01, -0.05, 0.95],
					duration: 0.8,
				}}
				layoutId="brand-logo"
				href="#"
				className="font-quicksand font-bold "
			>
				<span className="relative">
					WAYNE
					{/* <span className="absolute bottom-[3px] -right-[6px] bg-blue-600 w-[4px] h-[4px] rounded-full"></span> */}
				</span>
			</motion.a>
		</div>
	);
};

export default BrandName;
