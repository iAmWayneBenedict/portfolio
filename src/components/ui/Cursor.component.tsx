import React, { useState } from "react";
import { useRef, useEffect } from "react";

interface PositionProp {
	mouseX: number;
	mouseY: number;
	destinationX: number;
	destinationY: number;
	distanceX: number;
	distanceY: number;
	key: number;
}

const Cursor = () => {
	const [isMoving, setIsMoving] = useState<boolean>(false);
	const mainCursor = useRef<HTMLDivElement>(null);
	const secondaryCursor = useRef<HTMLDivElement>(null);
	const positionRef = useRef<PositionProp>({
		mouseX: 0,
		mouseY: 0,
		destinationX: 0,
		destinationY: 0,
		distanceX: 0,
		distanceY: 0,
		key: -1,
	});

	useEffect(() => {
		document.addEventListener("mousemove", (event: MouseEvent) => {
			const { clientX, clientY } = event;
			setIsMoving(true);
			const mouseX = clientX;
			const mouseY = clientY;

			if (!mainCursor.current || !secondaryCursor.current) return;
			positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
			positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;
			mainCursor.current.style.transform = `translate3d(${
				mouseX - mainCursor.current.clientWidth / 2
			}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
		});
		return () => {};
	}, []);

	useEffect(() => {
		const followMouse = () => {
			if (!secondaryCursor.current) return;
			positionRef.current.key = requestAnimationFrame(followMouse);
			const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } =
				positionRef.current;
			if (!destinationX || !destinationY) {
				positionRef.current.destinationX = mouseX;
				positionRef.current.destinationY = mouseY;
			} else {
				positionRef.current.distanceX = (mouseX - destinationX) * 0.03;
				positionRef.current.distanceY = (mouseY - destinationY) * 0.03;
				if (
					Math.abs(positionRef.current.distanceX) +
						Math.abs(positionRef.current.distanceY) <
					0.05
				) {
					positionRef.current.destinationX = mouseX;
					positionRef.current.destinationY = mouseY;
				} else {
					positionRef.current.destinationX += distanceX;
					positionRef.current.destinationY += distanceY;
				}
			}
			secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
		};
		followMouse();
	}, []);

	useEffect(() => {
		let links = document.querySelectorAll("a, button");
		links.forEach((el) => {
			el.addEventListener("mouseover", () => {
				if (
					!secondaryCursor.current ||
					!mainCursor.current ||
					!mainCursor.current.firstElementChild
				)
					return;
				let child = mainCursor.current.firstElementChild as HTMLDivElement;
				child.style.width = "10px";
				child.style.height = "10px";
				secondaryCursor.current.style.opacity = "0";
			});
			el.addEventListener("mouseout", () => {
				if (
					!secondaryCursor.current ||
					!mainCursor.current ||
					!mainCursor.current.firstElementChild
				)
					return;
				let child = mainCursor.current.firstElementChild as HTMLDivElement;
				child.style.width = "30px";
				child.style.height = "30px";
				secondaryCursor.current.style.opacity = "1";
			});
		});
	}, []);

	useEffect(() => {
		if (!isMoving) return;
		mainCursor.current?.firstElementChild?.classList.remove("opacity-0");
		secondaryCursor.current?.classList.remove("opacity-0");
	}, [isMoving]);
	return (
		<>
			<div className="fixed mix-blend-difference z-50 pointer-events-none" ref={mainCursor}>
				<div className="bg-white w-[30px] h-[30px] rounded-full transition-all duration-500  opacity-0"></div>
			</div>
			<div
				className="fixed mix-blend-difference pointer-events-none z-50 transition-[opacity] duration-500 opacity-0"
				ref={secondaryCursor}
			>
				<div className="w-[100px] animate-[spin_10s_linear_infinite]">
					<svg xmlns="http://www.w3.org/2000/svg" lang="en" viewBox="0 0 500 500">
						<defs>
							<path
								id="textcircle"
								d="M250,400
        a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
								transform="rotate(12,250,250)"
							/>
						</defs>
						<rect width="100%" height="100%" fill="none" />
						<text className="text-[4.6rem] font-bold" style={{ fill: "white" }}>
							<textPath
								href="#textcircle"
								aria-label="All for One &amp; One for All"
								textLength="942"
							>
								.WAYNE. .WAYNE. .WAYNE.
							</textPath>
						</text>
					</svg>
				</div>
			</div>
		</>
	);
};

export default Cursor;
