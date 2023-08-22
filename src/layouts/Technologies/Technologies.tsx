import Marquee from "react-fast-marquee";
import MarqueeText from "../Home.layouts/Designs.layouts/MarqueeText.layouts";
import React from "react";
import { IconContext } from "react-icons";
import Icon, { icons } from "../../utils/Icon";
import { useMediaQuery } from "react-responsive";

const Technologies: React.FC = () => {
	let isMobileView = useMediaQuery({ query: "(max-width: 767px)" });
	return (
		<div className="mt-64">
			<h1 className="text-center font-bold text-xl lg:text-2xl">TECHNOLOGIES</h1>
			<div>
				<div className="mt-20">
					<div className="mousemove marquee-container text-white py-8 lg:py-12 border-t-2 border-b-2 border-[black]">
						<Marquee
							className="overflow-y-hidden cursor-default whitespace-nowrap"
							speed={50}
						>
							<div className="flex gap-14 marquee-title relative text-[#3f3e3c] m-0 will-change-transform px-6">
								<IconContext.Provider
									value={{
										size: isMobileView ? "2.5rem" : "3.75rem",
									}}
								>
									{Object.keys(icons)
										.filter((key) => key !== "laravel" && key !== "codeigniter")
										.map((key, index) => (
											<Icon key={key} name={key} />
										))}
								</IconContext.Provider>
							</div>
						</Marquee>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
