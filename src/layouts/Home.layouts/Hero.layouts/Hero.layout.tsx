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
		const text2 = new SplitType("#hero-3");
		const text3 = new SplitType("#hero-4");
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
		)
			.to(
				text1.chars,
				{
					y: 0,
					stagger: 0.05,
					delay: 0.2,
					duration: 0.1,
				},
				"-=1"
			)
			.to(
				text2.chars,
				{
					y: 0,
					stagger: 0.05,
					delay: 0.2,
					duration: 0.1,
				},
				"-=.9"
			)
			.to(
				text3.chars,
				{
					y: 0,
					stagger: 0.05,
					delay: 0.2,
					duration: 0.1,
				},
				"-=.8"
			);

		return () => {
			// Cleanup animation and plugins when component unmounts
			tl.kill();
			t.kill();
			gsap.registerPlugin([]);
		};
	}, []);

	return (
		<div>
			<div
				className="hero-con flex flex-col gap-5 items-center justify-end h-[30vh] sm:h-[50vh] xl:h-[65vh] pointer-events-none font-light"
				style={{ lineHeight: ".9", fontSize: "clamp(.6rem, 6vw , 10rem)" }}
			>
				<span
					id="hero-1"
					data-speed="0.10"
					className="hero overflow-x-hidden overflow-y-hidden"
				>
					HI, I’M WAYNE
				</span>
				<span
					id="hero-2"
					data-speed="0.90"
					className="hero overflow-x-hidden overflow-y-hidden"
				>
					A FULLSTACK DEVELOPER
				</span>
				<span
					id="hero-3"
					data-speed="1.80"
					className="hero overflow-x-hidden overflow-y-hidden"
				>
					THAT CAN MAKE YOUR IDEAS
				</span>
				<span
					id="hero-4"
					data-speed="2.80"
					className="hero overflow-x-hidden overflow-y-hidden"
				>
					INTO REALITY
				</span>
			</div>
			<ScrollDown isLoaded={isLoaded} />
		</div>
	);
};

export default Hero;
