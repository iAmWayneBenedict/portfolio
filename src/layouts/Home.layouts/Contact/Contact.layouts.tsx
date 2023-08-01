import { Link } from "react-router-dom";
import { useEffect } from "react";
import CustomLink from "../../../components/ui/CustomLink";
import useDate from "../../../hooks/useDate";

interface Props {
	classes?: string;
}
export const ContactLayouts: React.FC<Props> = ({ classes = "bg-[black] text-white" }) => {
	const { year } = useDate();
	let filterStyles: string = "";
	if (classes.includes("bg-white")) {
		filterStyles = "invert(1)";
	}

	return (
		<div className={`${classes} mt-40 pt-48 pb-20 px-5 md:px-20 lg:px-24`}>
			<div className={`flex justify-between flex-col lg:flex-row`}>
				<div>
					<CustomLink to="/contact" className="group">
						<h1 className="flex">
							<span
								className="font-neueMontrealRegular"
								style={{ fontSize: "clamp(3.75rem, 10vw, 6.75rem)" }}
							>
								LET'S TALK.
							</span>
							<img
								className="group-hover:ml-10 transition-all duration-300 ease"
								src="/assets/ico/arrow-up-right.svg"
								style={{
									width: "clamp(6rem, 10vw, 10rem)",
									filter: filterStyles,
								}}
								alt="arrow-up-right"
							/>
						</h1>
					</CustomLink>
					<div className="mt-16 flex flex-col gap-10 text-lg">
						<p>Open for Collaboration</p>
						<p>Available for Freelance Work</p>
					</div>
				</div>
				<div className="flex flex-row lg:flex-col gap-10 mt-24 lg:mt-0">
					<Link to="https://github.com/iAmWayneBenedict" target="_blank">
						<img
							src="/assets/ico/github.svg"
							style={{ filter: filterStyles }}
							alt="github"
						/>
					</Link>

					<Link to="https://www.linkedin.com/in/iamwaynebenedict/" target="_blank">
						<img
							src="/assets/ico/linkedin.svg"
							style={{ filter: filterStyles }}
							alt="linkedin"
						/>
					</Link>

					<Link to="https://dribbble.com/iamwaynebenedict" target="_blank">
						<img
							src="/assets/ico/dribbble%201.svg"
							style={{ filter: filterStyles }}
							alt="dribbble"
						/>
					</Link>
				</div>
			</div>
			<div className="mt-36 pb-10 lg:mt-56 flex justify-between text-sm sm:text-base">
				<div>
					<Link to="#">Terms and Conditions</Link>
				</div>
				<div>
					<span>
						<span>©</span>
						<span> {year} | WAYNE</span>
					</span>
				</div>
			</div>
		</div>
	);
};
