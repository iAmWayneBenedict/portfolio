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
import SwiperCore, { FreeMode, Pagination, Navigation, EffectCreative } from "swiper";
import SwiperInstance from "swiper";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
	handleTouchEnd,
	handleTouchMove,
	handleTouchStart,
} from "../../../utils/handleTouchDragEvent";
import { motion, useInView } from "framer-motion";
import data from "../../../utils/data";
import CustomLink from "../../../components/ui/CustomLink";
import { useMediaQuery } from "react-responsive";
import { mouseOne } from "../../../components/ui/Cursor.component";

gsap.registerPlugin(ScrollTrigger);
const Designs = () => {
	const text = useRef<HTMLDivElement>(null);
	const slide1 = useRef<HTMLDivElement>(null);
	const swiperCon = useRef<HTMLDivElement>(null);

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
	let isMobileView = useMediaQuery({ query: "(max-width: 480px)" });
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1, transition: { duration: 2, ease: "easeInOut" } }}
			ref={designCon}
			className="mt-96 pb-0 md:pb-24 text-white bg-transparent"
		>
			<div>
				<h1 className="text-center text-sm lg:text-lg">
					Immersive designs that can suffice your expectations.
				</h1>
				<MarqueeCon />
			</div>
			<div className="px-5 md:px-20 flex flex-col lg:flex-row">
				<div className="basis-3/5">
					<Title
						name="Designs"
						overrideSubClasses="text-[#2F2F2F]"
						overrideConClasses="pt-24"
					/>
				</div>
			</div>
			<div className="px-5 md:px-20 mt-8 md:mt-12 lg:mt-56 flex items-center">
				<div className="basis-1/2">
					<div className="w-2/3 h-px bg-white"></div>
				</div>
				<div className="basis-1/2 flex justify-end z-10">
					<div className="icons inline-flex justify-around my-0 sm:mt-8 sm:mb-10 gap-7 order-2 md:order-1">
						<button title="back" type="button">
							<img
								onClick={() => goPrev()}
								src="/assets/svg/arrow-left [white].svg"
								className="w-8 md:w-12"
								alt=""
							/>
						</button>
						<button title="next" type="button">
							<img
								onClick={() => goNext()}
								src="/assets/svg/arrow-right [white].svg"
								className="w-8 md:w-12"
								alt=""
							/>
						</button>
					</div>
				</div>
			</div>
			<div ref={swiperCon}>
				<div className="px-1 md:px-20 mt-3 md:mt-5 lg:mt-20">
					<Swiper
						slidesPerView={1}
						ref={swiperRef}
						onSlideChange={() => {
							console.log("Slide Change");
						}}
						loop={true}
						grabCursor={true}
						effect={"creative"}
						creativeEffect={{
							prev: {
								shadow: true,
								translate: [0, 0, -400],
							},
							next: {
								translate: ["100%", 0, 0],
							},
						}}
						onSwiper={setSwiper}
						navigation={true}
						onTouchMove={({ touches }) =>
							!isTabletOrMobile && mouseOne(touches.currentX, touches.currentY)
						}
						modules={[Navigation, Pagination, EffectCreative]}
						className="w-full swiper-con cursor-pointer h-[25rem] md:h-[50rem] 2xl:h-[70rem] overflow-hidden"
					>
						{data.designs.map((design, index) => (
							<SwiperSlide key={index}>
								<CustomLink to={"/designs/" + design.URIName}>
									<img
										className="view-design w-full h-full object-cover transition-all duration-700 hover:scale-[1.05]"
										src={design.thumbnail}
										alt={design.URIName}
									/>
								</CustomLink>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</motion.div>
	);
};

export default Designs;
