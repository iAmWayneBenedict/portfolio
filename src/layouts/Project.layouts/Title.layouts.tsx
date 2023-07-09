import React from "react";
import CustomLink from "../../components/ui/CustomLink";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
interface Props {
	src?: string;
	children?: string;
}
const Title: React.FC<Props> = ({ src, children }) => {
	const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
	const defaultTitleSize = children!.length > 18 ? "4rem" : "6.5rem";
	const defaultArrowSize = children!.length > 18 ? "7rem" : "10rem";
	const defaultArrowPosition =
		children!.length > 18
			? "lg:group-hover:right-[-8rem]"
			: "lg:group-hover:right-[-11rem] lg:-right-40";
	return (
		<h1
			className="mt-20 group relative w-fit"
			style={{ fontSize: "clamp(1.75rem, 6vw, " + defaultTitleSize + ")" }}
		>
			<div className="overflow-hidden flex justify-center">
				<Link
					className={
						src
							? isMobile
								? "demo text-center"
								: "demo text-center link-bottom-style hover:after:animate-linkFirstAnim hover:before:animate-linkSecondAnim relative overflow-hidden after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black before:absolute before:content-[''] before:bottom-0 before:left-[-300%] before:w-full before:h-px before:bg-black"
							: "text-center pointer-events-none"
					}
					to={src ? src : "/"}
					target="_blank"
				>
					{children}
				</Link>
			</div>
			{!isMobile && src && (
				<img
					className={` ${defaultArrowPosition} -right-[4rem] sm:-right-20 absolute top-0 md:-right-[7rem] transition-all duration-200 ease-in`}
					src="/assets/ico/arrow-up-right.svg"
					style={{
						width: "clamp(1.75rem, 10vw, " + defaultArrowSize + ")",
						filter: "invert(1)",
					}}
					alt=""
				/>
			)}
		</h1>
	);
};

export default Title;
