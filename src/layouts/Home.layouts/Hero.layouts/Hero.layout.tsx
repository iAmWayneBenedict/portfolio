import gsap from "gsap";
import React from "react";
import ScrollDown from "./ScrollDown.component";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
interface Props {
	isLoaded: boolean;
}
const Hero: React.FC<Props> = ({ isLoaded }) => {
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const text = new SplitType("#hero-1");
		const text1 = new SplitType("#hero-2");
		let delay = isLoaded ? "+=.5" : "+=11";

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".hero-con",
				start: "top top",
				end: "+=100%",
				scrub: true,
			},
		});

		gsap.utils.toArray(".hero").forEach((layer) => {
			let l = layer as HTMLSpanElement;
			const speed: number = parseFloat(l.dataset.speed!);
			const movement = -(l.offsetHeight * speed);
			tl.to(l, { y: movement, ease: "none" }, 0);
		});

		const t = gsap.timeline();
		t.to(
			text.chars,
			{
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: 0.1,
			},
			delay
		).to(
			text1.chars,
			{
				y: 0,
				stagger: 0.05,
				delay: 0.2,
				duration: 0.1,
			},
			"-=1"
		);

		return () => {
			// Cleanup animation and plugins when component unmounts
			tl.kill();
			t.kill();
			gsap.registerPlugin([]);
		};
	}, []);

	return (
		<div className="h-screen w-full">
			<div className="flex flex-col justify-center h-2/3 sm:h-1/2 md:h-2/3 w-full">
				<div
					className="hero-con flex flex-col gap-5 items-center pointer-events-none font-normal md:font-light leading-[1] md:leading-[1.25]"
					style={{ fontSize: "clamp(1.8rem, 6vw , 7rem)" }}
				>
					<span
						id="hero-1"
						data-speed="0.10"
						className="hero overflow-x-hidden overflow-y-hidden"
					>
						FULLSTACK DEVELOPER
					</span>
					<span
						id="hero-2"
						data-speed="0.90"
						className="hero overflow-x-hidden overflow-y-hidden"
					>
						AND DESIGNER
					</span>
				</div>
				<div className="flex justify-center pointer-events-none mt-10 lg:mt-20 w-full">
					<div
						className="text-center text-base md:text-lg lg:text-2xl mx-5 lg:mx:0 max-w-2xl"
						style={{ lineHeight: "1.75" }}
					>
						<span>I am a Developer and UX/UI Designer based in Philippines. </span>
						<span>
							Likes to experiment with new techniques and mess around with emerging
							technologies.
						</span>
					</div>
				</div>
			</div>
			<ScrollDown isLoaded={isLoaded} />
		</div>
	);
};

export default Hero;
