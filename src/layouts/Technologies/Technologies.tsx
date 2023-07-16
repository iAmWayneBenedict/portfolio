import Marquee from "react-fast-marquee";
import MarqueeText from "../Home.layouts/Designs.layouts/MarqueeText.layouts";
import React from "react";

const Technologies: React.FC = () => {
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
							<div className="flex gap-14 marquee-title relative text-[#99948d] m-0 will-change-transform">
								{[
									"/assets/ico/react%201.svg",
									"/assets/ico/express.svg",
									"/assets/ico/nodejs%201.svg",
									"/assets/ico/typescript.svg",
									"/assets/ico/sass.svg",
									"/assets/ico/tailwind-css.svg",
									"/assets/ico/bootstrap.svg",
									"/assets/ico/html5.svg",
									"/assets/ico/css3.svg",
									"/assets/ico/figma-logo.svg",
									"/assets/ico/npm.svg",
									"/assets/ico/postman.svg",
									"/assets/ico/git(1).svg",
									"/assets/ico/mysql.svg",
									"/assets/ico/java-script.svg",
									"/assets/ico/php.svg",
								].map((src, index) => (
									<img key={index} src={src} className="w-12 lg:w-16" alt="" />
								))}
							</div>
						</Marquee>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Technologies;
