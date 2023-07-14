import React from "react";
import MenuLink from "./MenuLink";
import { Link } from "react-router-dom";

interface Props {
	useReference: React.RefObject<HTMLDivElement>;
	historyReturn: React.RefObject<HTMLButtonElement>;
}

const Menu: React.FC<Props> = ({ useReference, historyReturn }) => {
	return (
		<div
			ref={useReference}
			className="menu-con fixed opacity-0 hidden top-0 left-0 w-screen h-screen bg-white z-50"
		>
			<div className="left-menu hidden bg-black w-[20rem] h-0 md:flex flex-col justify-between items-start">
				<div className="top-left-menu text-white font-bold font-quicksand text-2xl w-fit opacity-0">
					<h1 className="-rotate-90 pr-16 pb-20" style={{ direction: "rtl" }}>
						WAYNE
					</h1>
				</div>
				<div className="bottom-left-menu text-white mb-10 w-full opacity-0">
					<p className="w-full text-center text-sm">Terms and Conditions</p>
				</div>
			</div>
			<div className="right-menu w-full relative h-full">
				{/* <div className="absolute bottom-0 right-0 span-black bg-white w-[25rem] h-[20rem] mix-blend-difference"></div> */}
				<Link
					to="/"
					className="font-quicksand font-bold absolute top-5 flex left-3 md:hidden"
				>
					WAYNE
				</Link>
				<div className="flex flex-col px-24 md:px-32 xl:px-48 justify-evenly h-full">
					<div className="menu-back hidden md:flex">
						<button
							type="button"
							className="close-menu-btn flex gap-5 items-center opacity-0 -translate-y-10"
							ref={historyReturn}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-arrow-left"
							>
								<line x1="19" y1="12" x2="5" y2="12"></line>
								<polyline points="12 19 5 12 12 5"></polyline>
							</svg>
							<span className="text-lg font-semibold font-quicksand">Return</span>
						</button>
					</div>
					<div className="menu-nav flex flex-col gap-5">
						<MenuLink text={"PROJECTS"} href="/projects" />
						<MenuLink text={"CONTACT"} />
						<MenuLink text={"DESIGNS"} />
						<MenuLink text={"ABOUT"} />
					</div>

					<div className="menu-socials flex flex-col gap-10 sm:gap-0 sm:flex-row justify-between items-center">
						<div className="menu-socials-left flex gap-5">
							<Link
								to="https://github.com/iAmWayneBenedict"
								target="_blank"
								className="github-menu-icon translate-y-10 opacity-0"
							>
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M11.25 23.75C5 25.625 5 20.625 2.5 20M20 27.5V22.6625C20.0469 22.0664 19.9664 21.4672 19.7638 20.9047C19.5612 20.3422 19.2412 19.8293 18.825 19.4C22.75 18.9625 26.875 17.475 26.875 10.65C26.8747 8.90477 26.2034 7.22648 25 5.96248C25.5698 4.43562 25.5295 2.74792 24.8875 1.24998C24.8875 1.24998 23.4125 0.812483 20 3.09998C17.135 2.32351 14.115 2.32351 11.25 3.09998C7.8375 0.812483 6.3625 1.24998 6.3625 1.24998C5.72047 2.74792 5.68018 4.43562 6.25 5.96248C5.03766 7.23586 4.36565 8.92931 4.375 10.6875C4.375 17.4625 8.5 18.95 12.425 19.4375C12.0137 19.8624 11.6966 20.3692 11.4941 20.9249C11.2917 21.4805 11.2085 22.0726 11.25 22.6625V27.5"
										stroke="black"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</Link>

							<Link
								to="https://www.linkedin.com/in/iamwaynebenedict/"
								target="_blank"
								className="linkedin-menu-icon translate-y-10 opacity-0"
							>
								<svg
									width="30"
									height="30"
									viewBox="0 0 30 30"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M20 10C21.9891 10 23.8968 10.7902 25.3033 12.1967C26.7098 13.6032 27.5 15.5109 27.5 17.5V26.25H22.5V17.5C22.5 16.837 22.2366 16.2011 21.7678 15.7322C21.2989 15.2634 20.663 15 20 15C19.337 15 18.7011 15.2634 18.2322 15.7322C17.7634 16.2011 17.5 16.837 17.5 17.5V26.25H12.5V17.5C12.5 15.5109 13.2902 13.6032 14.6967 12.1967C16.1032 10.7902 18.0109 10 20 10V10Z"
										stroke="black"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M7.5 11.25H2.5V26.25H7.5V11.25Z"
										stroke="black"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M5 7.5C6.38071 7.5 7.5 6.38071 7.5 5C7.5 3.61929 6.38071 2.5 5 2.5C3.61929 2.5 2.5 3.61929 2.5 5C2.5 6.38071 3.61929 7.5 5 7.5Z"
										stroke="black"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</Link>
							<Link
								to="https://dribbble.com/iamwaynebenedict"
								target="_blank"
								className="dribble-menu-icon translate-y-10 opacity-0"
							>
								<img src="/assets/png/Dribbble.png" alt="" />
							</Link>
						</div>
						<div className="menu-socials-right opacity-0 flex gap-5">
							<span>© 2022 | WAYNE</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Menu;
