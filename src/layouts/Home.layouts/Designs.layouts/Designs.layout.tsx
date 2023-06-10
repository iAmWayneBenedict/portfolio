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
import {handleTouchEnd, handleTouchMove, handleTouchStart} from "../../../utils/handleTouchDragEvent";

const Designs = () => {
	const text = useRef<HTMLDivElement>(null);

	const [swiper, setSwiper] = useState<SwiperInstance | null>(null);

	const swiperRef = useRef(null);

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

	gsap.registerPlugin(ScrollTrigger);

	const designCon = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const bgCon = document.querySelector(".bg-con") as HTMLDivElement;
		console.log("trigger 1")
		gsap.to(bgCon, {
			backgroundColor: "black",
			duration: 1,

			scrollTrigger: {
				trigger: designCon.current!,
				start: "top center",
				toggleActions: "restart none none reverse",
				onToggle: () => {
					console.log("toggle")
				},
				onEnterBack: () => {
					console.log("enter back")
					gsap.to(bgCon, {
						background: '#000000',
						duration: 1,
					})
				},
				onLeave: () => {
					console.log("leave")
					gsap.to(bgCon, {
						background: '#ffffff',
						duration: 1,
					})
				}
			},
		});
		console.log("trigger 2")
	}, []);

	return (
		<div ref={designCon} className="mt-56 py-24 text-white bg-black">
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
					onTouchMove={(event) => handleTouchMove(event.touches, '.cursor-3')}
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
		</div>
	);
};

export default Designs;
