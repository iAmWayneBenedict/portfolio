import React, { useRef } from "react";

const Cursor = () => {
	// Cursor Two
	const mainCursor2 = useRef<HTMLDivElement>(null);

	const mouseTwo = (event: MouseEvent) => {
		const { clientX, clientY } = event;

		const mouseX = clientX;
		const mouseY = clientY;

		if (!mainCursor2.current) return;
		mainCursor2.current.style.transform = `translate3d(${
			mouseX - mainCursor2.current.clientWidth / 2
		}px, ${mouseY - mainCursor2.current.clientHeight / 2}px, 0)`;
	};
	return (
		<div className="fixed z-[1000] pointer-events-none " ref={mainCursor2}>
			<div className="bg-[black] text-white w-[150px] h-[150px] rounded-full transition-all duration-500 opacity-0 flex justify-center items-center">
				DRAG
			</div>
		</div>
	);
};

export default Cursor;
