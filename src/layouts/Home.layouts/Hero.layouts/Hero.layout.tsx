import gsap from "gsap";
import React, { useRef } from "react";
import ScrollDown from "./ScrollDown.component";
import SplitType from "split-type";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";
import CustomLink from "../../../components/ui/CustomLink";
import { CustomEase } from "gsap/CustomEase";
interface Props {
	isLoaded: boolean;
}
const Hero: React.FC<Props> = ({ isLoaded }) => {
	gsap.registerPlugin(ScrollTrigger);
	const des = useRef<HTMLDivElement>(null);
	const vid = useRef<HTMLDivElement>(null);
	const cta = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(CustomEase);

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
				des.current!,
				{
					opacity: 1,
					duration: 2,
				},
				"+=1"
			)
			.to(
				cta.current!,
				{
					opacity: 1,
					duration: 2,
				},
				"-=.5"
			)
			.fromTo(
				vid.current!,
				{
					opacity: 0,
					y: "25%",
				},
				{
					opacity: 1,
					y: "0",
					duration: 1,
					ease: CustomEase.create(
						"custom",
						"M0,0,C0.084,0.61,0.106,0.822,0.172,0.876,0.248,0.938,0.374,1,1,1"
					),
				},
				"-=2"
			);

		return () => {
			// Cleanup animation and plugins when component unmounts
			tl.kill();
			t.kill();
			gsap.registerPlugin([]);
		};
	}, []);

	return (
		<>
			<div className="h-auto w-full">
				<div className="flex flex-col justify-center h-2/3 sm:h-1/2 md:h-2/3 w-full pt-20">
					<div
						className="hero-con flex flex-col gap-5 items-center pointer-events-none font-normal md:font-light leading-[1] md:leading-[1.25]"
						style={{ fontSize: "clamp(1.8rem, 6vw , 6rem)" }}
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
					<div
						ref={des}
						className="flex flex-col items-center pointer-events-none mt-10 lg:mt-20 w-full opacity-0"
					>
						<div
							className="text-center text-base md:text-lg lg:text-2xl mx-5 lg:mx:0 max-w-2xl"
							style={{ lineHeight: "1.75" }}
						>
							<span>I am a Developer and UX/UI Designer based in Philippines. </span>
							<span>
								Likes to experiment with new techniques and mess around with
								emerging technologies.
							</span>
						</div>
					</div>
					{/* <div ref={cta} className="mt-10 flex justify-center opacity-0">
						<CustomLink
							to={"/projects"}
							className="text-xs md:text-base rounded-xl bg-black text-white px-7 md:px-10 py-3 md:py-4"
						> */}
					{/* <div className="link-bottom-style hover:after:animate-linkFirstAnim hover:before:animate-linkSecondAnim relative overflow-hidden after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-px after:bg-black before:absolute before:content-[''] before:bottom-0 before:left-[-200%] before:w-full before:h-px before:bg-black text-sm md:text-lg"> */}
					{/* View Projects */}
					{/* </div> */}
					{/* </CustomLink>
					</div> */}
				</div>
				{/* <ScrollDown isLoaded={isLoaded} /> */}
			</div>
			<div
				className="px-0 sm:px-8 md:px-12 xl:px-16 2xl:px-24 w-fit mt-10 md:mt-20"
				ref={vid}
			>
				<video
					src="/assets/video/Promotional Video.mp4"
					className="w-full h-full"
					autoPlay={true}
					loop={true}
					muted={true}
				></video>
			</div>
		</>
	);
};

export default Hero;
