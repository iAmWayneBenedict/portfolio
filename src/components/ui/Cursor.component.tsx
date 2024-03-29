import { useRef, useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

interface PositionProp {
	mouseX: number;
	mouseY: number;
	destinationX: number;
	destinationY: number;
	distanceX: number;
	distanceY: number;
	destinationMainX: number;
	destinationMainY: number;
	distanceMainX: number;
	distanceMainY: number;
	key: number;
}

let handleMouseCursor: () => void;
let mouseOne: (clientX: number, clientY: number) => void;
interface Props {
	categoryChanged: string;
}
const Cursor: React.FC<Props> = ({ categoryChanged }) => {
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
		destinationMainX: 0,
		destinationMainY: 0,
		distanceMainX: 0,
		distanceMainY: 0,
		key: -1,
	});

	handleMouseCursor = () => {
		const followMouse = () => {
			if (!secondaryCursor.current) return;
			positionRef.current.key = requestAnimationFrame(followMouse);
			const {
				mouseX,
				mouseY,
				destinationX,
				destinationY,
				distanceX,
				distanceY,
				destinationMainX,
				destinationMainY,
				distanceMainX,
				distanceMainY,
			} = positionRef.current;
			if (!destinationX || !destinationY) {
				positionRef.current.destinationX = mouseX;
				positionRef.current.destinationY = mouseY;
				positionRef.current.destinationMainX = mouseX;
				positionRef.current.destinationMainY = mouseY;
			} else {
				positionRef.current.distanceX = (mouseX - destinationX) * 0.015;
				positionRef.current.distanceY = (mouseY - destinationY) * 0.015;
				positionRef.current.distanceMainX = (mouseX - destinationMainX) * 0.035;
				positionRef.current.distanceMainY = (mouseY - destinationMainY) * 0.035;
				if (
					Math.abs(positionRef.current.distanceX) +
						Math.abs(positionRef.current.distanceY) <
					0.05
				) {
					positionRef.current.destinationX = mouseX;
					positionRef.current.destinationY = mouseY;
					positionRef.current.destinationMainX = mouseX;
					positionRef.current.destinationMainY = mouseY;
				} else {
					positionRef.current.destinationX += distanceX;
					positionRef.current.destinationY += distanceY;
					positionRef.current.destinationMainX += distanceMainX;
					positionRef.current.destinationMainY += distanceMainY;
				}
			}
			secondaryCursor.current.style.transform = `translate3d(${destinationX}px, ${destinationY}px, 0)`;
			mainCursor.current!.style.top = `${destinationMainY + 25}px`;
			mainCursor.current!.style.left = `${destinationMainX + 25}px`;
		};
		followMouse();
		let links = document.querySelectorAll(
			"a, button, .swiper, label, input, textarea, .skills"
		);
		let child = mainCursor.current?.firstElementChild as HTMLDivElement;
		child.style.transform = "scale(.85)";
		let sChild = child.nextElementSibling as HTMLElement;
		sChild.innerText = "";

		links.forEach((el) => {
			if (el.classList.contains("no-cursor")) return;
			el.addEventListener("mouseover", (event) => {
				let currentEl = event.currentTarget as Element;
				// if (currentEl.classList.contains("project-con")) return;
				if (
					!secondaryCursor.current ||
					!mainCursor.current ||
					!mainCursor.current.firstElementChild
				)
					return;
				let child = mainCursor.current?.firstElementChild as HTMLDivElement;

				if (
					currentEl.tagName === "DIV" ||
					currentEl.classList.contains("project-con") ||
					currentEl.classList.contains("demo") ||
					currentEl.classList.contains("skills")
				) {
					child.style.transform = "scale(5)";

					(child.nextElementSibling as HTMLSpanElement)!.style.transition =
						"all 1s ease 500ms";
					(child.nextElementSibling as HTMLSpanElement)!.style.opacity = "1";
				} else {
					child.style.transform = "scale(.45)";
				}
				secondaryCursor.current!.style.opacity = "0";
			});
			el.addEventListener("mouseout", () => {
				if (
					!secondaryCursor.current ||
					!mainCursor.current ||
					!mainCursor.current.firstElementChild
				)
					return;
				let child = mainCursor.current.firstElementChild as HTMLDivElement;
				child.style.transform = "scale(.85)";
				(child.nextElementSibling as HTMLSpanElement)!.style.opacity = "0";
				child.nextElementSibling!.textContent = "";
				secondaryCursor.current.style.opacity = "1";
			});
		});
	};

	mouseOne = (clientX: number, clientY: number) => {
		setIsMoving(true);

		const mouseX = clientX;
		const mouseY = clientY;

		if (!mainCursor.current || !secondaryCursor.current) return;
		positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
		positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;
		// mainCursor.current.style.top = `${mouseY - mainCursor.current.clientHeight / 2}px`;
		// mainCursor.current.style.left = `${mouseX - mainCursor.current.clientWidth / 2}px`;
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
			let isProjects =
				firstParent?.classList.contains("project-con") ||
				firstParent?.parentElement?.classList.contains("project-con") ||
				targetEl?.classList.contains("project-con");
			let isSkills =
				targetEl?.classList.contains("skills") ||
				firstParent?.classList.contains("skills") ||
				firstParent?.parentElement?.classList.contains("skills") ||
				firstParent?.parentElement?.parentElement?.classList.contains("skills");

			let isDesign = targetEl.tagName === "IMG" && targetEl.classList.contains("view-design");

			if (!mainCursor.current || !secondaryCursor.current) return;

			let mainCursorFChild = mainCursor.current!.firstElementChild as HTMLDivElement;
			let mainCursorLChild = mainCursor.current!.lastElementChild as HTMLDivElement;

			mainCursor.current!.style.mixBlendMode = "unset";
			const app = document.querySelector(".bg-con") as HTMLElement;
			if (location.pathname !== "/") {
				mainCursorFChild.style.background =
					app.style.backgroundColor === "black" ? "white" : "black";
				mainCursorLChild.style.color =
					app.style.backgroundColor === "black" ? "black" : "white";
			} else {
				mainCursorFChild.style.background = "black";
				mainCursorLChild.style.color = "white";
			}
			if (isJourney) {
				mainCursorLChild.textContent = "DRAG";
			} else if (isDesign) {
				mainCursorLChild.textContent = "VIEW";
			} else if (isProjects) {
				mainCursorLChild.textContent = "VIEW WORK";
			} else if (targetEl.classList.contains("demo")) {
				mainCursorLChild.textContent = "DEMO";
			} else if (isSkills) {
				mainCursorLChild.textContent = "SERVICES";
			} else {
				mainCursorFChild.style.background = "white";
				mainCursorLChild.style.color = "black";
				mainCursor.current!.style.mixBlendMode = "difference";
			}
			mouseOne(event.clientX, event.clientY);
		};
		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [location]);

	useEffect(() => {
		handleMouseCursor();
		if (!isMoving) return;

		mainCursor.current?.firstElementChild?.classList.remove("opacity-0");
		secondaryCursor.current?.classList.remove("opacity-0");
		secondaryCursor.current!.style.opacity = "1";

		return () => {
			cancelAnimationFrame(positionRef.current.key);
		};
	}, [isMoving, location]);
	useEffect(() => {
		handleMouseCursor();

		return () => {
			cancelAnimationFrame(positionRef.current.key);
		};
	}, [categoryChanged]);
	return (
		<>
			<div
				className="fixed mix-blend-difference z-[1000] pointer-events-none w-fit main-cursor scale-[.85]"
				ref={mainCursor}
			>
				<div
					className="bg-white w-[30px] h-[30px] rounded-full opacity-0 relative"
					style={{
						transition: "transform 750ms cubic-bezier(0.200, 0.405, 0.200, 1.285)",
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
						textAlign: "center",
					}}
				></span>
			</div>
			<div
				className="fixed mix-blend-difference pointer-events-none z-[1000] transition-[opacity] duration-500 opacity-0"
				ref={secondaryCursor}
			>
				<div className="w-[80px] animate-[spin_10s_linear_infinite]">
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
export { handleMouseCursor, mouseOne };
