import React from "react";
import { motion } from "framer-motion";
interface Props {
	isLoading: boolean;
}
const SplashScreen: React.FC<Props> = ({ isLoading }) => {
	return (
		<div className="w-full bg-white h-full flex justify-center items-center absolute top-0 left-0">
			<div className="flex flex-col gap-6">
				<motion.h1 className="text-6xl font-quicksand font-extrabold pointer-events-none">
					WAYNE
				</motion.h1>
				<div
					className={`loader after:animate-splashScreen w-full rounded-3xl relative h-[.8rem] overflow-hidden bg-gray-200 after:absolute after:top-0 after:left-0 after:bg-black after:h-full after:rounded-3xl after:transition-[width] after:duration-[5000]`}
				></div>
			</div>
		</div>
	);
};

export default SplashScreen;
