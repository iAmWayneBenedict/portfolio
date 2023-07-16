import { motion } from "framer-motion";
import { forwardRef } from "react";

const transition = (OgComponent: any) => {
	const transitionedComponent = forwardRef((props, ref) => (
		<>
			<OgComponent {...props} ref={ref} />
			<motion.div
				className="slide-in fixed top-0 left-0 w-full h-screen bg-[black] origin-bottom"
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
			/>

			<motion.div
				className="slide-out fixed top-0 left-0 w-full h-screen bg-[black] origin-top"
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
			/>
		</>
	));

	return transitionedComponent;
};

export default transition;
