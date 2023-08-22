import { gsap } from "gsap";
import React, { useRef } from "react";
import SplitType from "split-type";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { CustomEase } from "gsap/CustomEase";
import data from "../../../utils/data";

import { EffectFade, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
interface Props {
	isLoaded: boolean;
}
const Hero: React.FC<Props> = ({ isLoaded }) => {
	gsap.registerPlugin(ScrollTrigger);
	const des = useRef<HTMLDivElement>(null);
	const vid = useRef<HTMLDivElement>(null);
	const cta = useRef<HTMLDivElement>(null);

	gsap.registerPlugin(CustomEase);
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
					duration: 1.5,
					ease: "expo.out",
				},
				"-=4.25"
			);

		return () => {
			// Cleanup animation and plugins when component unmounts
			tl.kill();
			t.kill();
			gsap.registerPlugin([]);
		};
	}, []);
	// const previews = [...data.projects, ...data.designs]
	// 	.map((el) => el.images.filter((e, index) => (index < 3 ? e : null)))
	// 	.flat();
	let isMobileView = useMediaQuery({ query: "(max-width: 480px)" });
	return (
		<>
			<div className="h-auto w-full">
				<div className="flex flex-col justify-center h-2/3 sm:h-1/2 md:h-2/3 w-full pt-16 2xl:pt-20">
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
					<div
						ref={des}
						className="flex flex-col items-center pointer-events-none mt-10 2xl:mt-20 w-full opacity-0"
					>
						<div className="text-center text-base lg:text-lg 2xl:text-2xl mx-5 lg:mx:0 max-w-4xl leading-0 md:leading-[1.75]">
							<span>
								I am a developer and UX/UI designer based in the Philippines.
							</span>

							<span>
								I like to explore new possibilities with emerging technologies,
								providing digital solutions and outcomes. I am specializing in
								React, Node.js, MongoDB, and Express.js.{" "}
							</span>
							{!isMobileView && (
								<span>
									I am also exploring Next.js for building SEO friendly
									applications.
								</span>
							)}
						</div>
					</div>
					{/* <div ref={cta} className="mt-10 flex justify-center opacity-0">
						<CustomLink
							to={"/projects"}
							className="text-xs md:text-base rounded-xl bg-[black] text-white px-7 md:px-10 py-3 md:py-4"
						> */}
					{/* <div className="link-bottom-style hover:after:animate-linkFirstAnim hover:before:animate-linkSecondAnim relative overflow-hidden after:absolute after:content-[''] after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[black] before:absolute before:content-[''] before:bottom-0 before:left-[-200%] before:w-full before:h-px before:bg-[black] text-sm md:text-lg"> */}
					{/* View Projects */}
					{/* </div> */}
					{/* </CustomLink>
					</div> */}
				</div>
				{/* <ScrollDown isLoaded={isLoaded} /> */}
			</div>
			<div
				className="px-0 sm:px-8 md:px-12 xl:px-16 2xl:px-24 w-full mt-10 lg:mt-16 2xl:mt-20"
				ref={vid}
			>
				<div className="w-full h-full parent">
					<Swiper
						slidesPerView={1}
						loop={true}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						effect={"fade"}
						modules={[EffectFade, Autoplay]}
						className="w-full overflow-hidden no-cursor"
					>
						{[...data.designs, ...data.projects].map((design, index) => (
							<SwiperSlide
								className="swiper-no-swiping pointer-events-none select-none"
								key={index}
							>
								<img
									className="w-full pointer-events-none select-none"
									src={design.thumbnail}
									alt={design.thumbnail}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				{/* <video
					src="https://rvrmhvoeeskwmwrgbuus.supabase.co/storage/v1/object/public/portfolio_storage/Promotional%20Video.mp4"
					className="w-full h-full"
					autoPlay={true}
					loop={true}
					muted={true}
				></video> */}
			</div>
		</>
	);
};

export default Hero;
