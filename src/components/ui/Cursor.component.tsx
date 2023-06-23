import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

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
	const location = useLocation();

	// Cursor One
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

	const handleMouseCursor = () => {
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

		let links = document.querySelectorAll("a, button, .swiper");

		links.forEach((el) => {
			el.addEventListener("mouseover", (event) => {
				let currentEl = event.currentTarget as Element;
				if (
					!secondaryCursor.current ||
					!mainCursor.current ||
					!mainCursor.current.firstElementChild
				)
					return;
				let child = mainCursor.current.firstElementChild as HTMLDivElement;
				if (currentEl.tagName === "DIV") {
					child.style.transform = "scale(5)";

					(child.nextElementSibling as HTMLSpanElement)!.style.transition =
						"all 1s ease 500ms";
					(child.nextElementSibling as HTMLSpanElement)!.style.opacity = "1";
				} else {
					child.style.transform = "scale(.45)";
				}

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
				child.style.transform = "scale(1)";
				(child.nextElementSibling as HTMLSpanElement)!.style.opacity = "0";
				child.nextElementSibling!.textContent = "";
				secondaryCursor.current.style.opacity = "1";
			});
		});
	};

	const mouseOne = (event: MouseEvent) => {
		const { clientX, clientY } = event;

		setIsMoving(true);

		const mouseX = clientX;
		const mouseY = clientY;

		if (!mainCursor.current || !secondaryCursor.current) return;
		positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
		positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;
		mainCursor.current.style.top = `${mouseY - mainCursor.current.clientHeight / 2}px`;
		mainCursor.current.style.left = `${mouseX - mainCursor.current.clientWidth / 2}px`;
	};

	useEffect(() => {
		const handleMouseMove = (event: MouseEvent) => {
			let targetEl = event.target as HTMLElement;
			let firstParent = targetEl.parentElement;
			let fParent = targetEl.parentElement?.parentElement?.parentElement?.parentElement;
			let cont = targetEl.parentElement?.parentElement?.parentElement;
			let fullParent =
				targetEl.parentElement?.parentElement?.parentElement?.parentElement?.parentElement;
			let isJourney =
				firstParent?.classList.contains("mousedrag") ||
				cont?.classList.contains("mousedrag") ||
				fParent?.classList.contains("mousedrag") ||
				fullParent?.classList.contains("mousedrag") ||
				targetEl.classList.contains("mousedrag");

			let isDesign = targetEl.tagName === "IMG" && targetEl.classList.contains("view-design");

			if (!mainCursor.current || !secondaryCursor.current) return;

			let mainCursorFChild = mainCursor.current!.firstElementChild as HTMLDivElement;
			let mainCursorLChild = mainCursor.current!.lastElementChild as HTMLDivElement;

			mainCursor.current!.style.mixBlendMode = "unset";
			mainCursorFChild.style.background = "black";
			mainCursorLChild.style.color = "white";
			if (isJourney) {
				mainCursorLChild.textContent = "DRAG";
			} else if (isDesign) {
				mainCursorLChild.textContent = "VIEW";
			} else {
				mainCursorFChild.style.background = "white";
				mainCursorLChild.style.color = "black";
				mainCursor.current!.style.mixBlendMode = "difference";
			}
			mouseOne(event);
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	useEffect(() => {
		handleMouseCursor();
		if (!isMoving) return;

		mainCursor.current?.firstElementChild?.classList.remove("opacity-0");
		secondaryCursor.current?.classList.remove("opacity-0");
	}, [isMoving, location]);
	return (
		<>
			<div
				className="fixed mix-blend-difference z-[1000] pointer-events-none w-fit main-cursor"
				ref={mainCursor}
			>
				<div
					className="bg-white w-[30px] h-[30px] rounded-full opacity-0 relative"
					style={{
						transition: "transform 750ms cubic-bezier(0.000, 0.405, 0.000, 1.285)",
					}}
				></div>
				<span
					style={{
						transform: "translate(-50%, -50%)",
						transition: "none",
						position: "absolute",
						top: "50%",
						left: "50%",
						opacity: 0,
					}}
				></span>
			</div>
			<div
				className="fixed mix-blend-difference pointer-events-none z-[1000] transition-[opacity] duration-500 opacity-0"
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
								WAYNE. WAYNE. WAYNE.
							</textPath>
						</text>
					</svg>
				</div>
			</div>
		</>
	);
};

export default Cursor;
