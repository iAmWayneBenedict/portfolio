import Title from "../../../components/ui/Title.component";
import { useEffect, useRef, useState } from "react";
import MarqueeCon from "./MarqueeCon.layouts";
import TitleHeading from "./TitleHeading.layouts";
import Line from "../../../components/ui/Line.component";
import Marquee from "react-fast-marquee";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type { Swiper as SwiperRef } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { FreeMode, Pagination, Navigation } from "swiper";
import SwiperInstance from "swiper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
	handleTouchEnd,
	handleTouchMove,
	handleTouchStart,
} from "../../../utils/handleTouchDragEvent";
import hoverEffect from "hover-effect";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);
const Designs = () => {
	const text = useRef<HTMLDivElement>(null);
	const slide1 = useRef<HTMLDivElement>(null);

	const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

	const designCon = useRef<HTMLDivElement>(null);
	const swiperRef = useRef(null);
	const inView = useInView(designCon);

	useEffect(() => {
		const bgCon = document.querySelector(".bg-con") as HTMLDivElement;
		bgCon.style.transition = "all 1s ease";
		if (inView) {
			bgCon.style.backgroundColor = "black";
		} else {
			bgCon.style.backgroundColor = "white";
		}
		console.log(inView, bgCon.style.backgroundColor);

		return () => {
			bgCon.style.transition = "unset";
		};
	}, [inView]);

	const goNext = () => {
		if (swiperRef.current !== null && swiper !== null) {
			swiper.slideNext();
		}
	};

	const goPrev = () => {
		if (swiperRef.current !== null && swiper !== null) {
			swiper.slidePrev();
		}
	};

	useEffect(() => {
		if (!text.current) return;

		const body = document.querySelector(".App") as HTMLDivElement;
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const bgCon = document.querySelector(".bg-con") as HTMLDivElement;
			const runAnimation = gsap.context(() => {
				let a = gsap.to(bgCon, {
					backgroundColor: "black",
					duration: 1,

					scrollTrigger: {
						trigger: designCon.current,
						start: "top center",
						toggleActions: "none play reverse none",
						onToggle: () => {
							console.log("toggle");
						},
						onEnterBack: () => {
							console.log("enter back");
							gsap.to(bgCon, {
								background: "#000000",
								duration: 1,
							});
						},
						onLeave: () => {
							console.log("leave");
							gsap.to(bgCon, {
								background: "#ffffff",
								duration: 1,
							});
						},
					},
				});
				console.log(a, designCon.current);
			});

			ScrollTrigger.refresh();
			return () => runAnimation.revert();
		}
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 2, ease: "easeInOut" } }}
			ref={designCon}
			className="mt-96 pb-24 text-white bg-transparent"
		>
			<div>
				<h1 className="text-center text-lg">
					Immersive designs that can suffice your expectations.
				</h1>
				<MarqueeCon />
			</div>
			<div className="px-5 md:px-20 flex">
				<div className="basis-3/5">
					<Title
						name="Designs"
						overrideSubClasses="text-[#2F2F2F]"
						overrideConClasses="pt-24"
					/>
				</div>
				<TitleHeading />
			</div>
			<div className="px-5 md:px-20 mt-24 flex items-center">
				<div className="basis-1/2">
					<div className="w-2/3 h-px bg-white"></div>
				</div>
				<div className="basis-1/2 flex justify-end">
					<div className="icons inline-flex justify-around mt-8 mb-10 gap-7 order-2 md:order-1">
						<button type="button">
							<img
								onClick={() => goPrev()}
								src="/assets/svg/arrow-left [white].svg"
								className="w-12"
								alt=""
							/>
						</button>
						<button type="button">
							<img
								onClick={() => goNext()}
								src="/assets/svg/arrow-right [white].svg"
								className="w-12"
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
			<div className="px-5 md:px-20 mt-20">
				<Swiper
					slidesPerView={1}
					ref={swiperRef}
					onSlideChange={() => {
						console.log("Slide Change");
					}}
					onSwiper={setSwiper}
					navigation={true}
					onTouchMove={(event) => handleTouchMove(event.touches, ".cursor-3")}
					onTouchStart={(event) => handleTouchStart(event.touches)}
					onTouchEnd={() => handleTouchEnd()}
					modules={[Navigation, Pagination]}
					className="w-full swiper-con cursor-pointer h-[70rem] overflow-hidden"
				>
					<SwiperSlide>
						<img
							className="view-design w-full h-full object-cover transition-all duration-700 hover:scale-[1.05]"
							src="/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="view-design w-full h-full object-cover transition-all duration-700 hover:scale-[1.05]"
							src="/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="view-design w-full h-full object-cover transition-all duration-700 hover:scale-[1.05]"
							src="/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"
							alt=""
						/>
					</SwiperSlide>
					<SwiperSlide>
						<img
							className="view-design w-full h-full object-cover transition-all duration-700 hover:scale-[1.05]"
							src="/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"
							alt=""
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</motion.div>
	);
};

export default Designs;
