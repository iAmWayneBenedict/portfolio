import React from "react";

import { motion } from "framer-motion";

const BrandName = () => {
	return (
		<div className="flex-1 flex justify-center mr-20">
			<motion.a
				transition={{
					ease: [0.6, 0.01, -0.05, 0.95],
					duration: 0.8,
				}}
				layoutId="brand-logo"
				href="#"
				className="font-quicksand font-bold cursor-none"
			>
				WAYNE
			</motion.a>
		</div>
	);
};

export default BrandName;
