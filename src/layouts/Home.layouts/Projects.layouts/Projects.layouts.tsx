import React, { useState } from "react";
import Title from "../../../components/ui/Title.component";
import ProjectCards from "./ProjectCards.component";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import type { Swiper as SwiperRef } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore, { FreeMode, Pagination, Navigation } from "swiper";
import { useRef, useEffect } from "react";
import SwiperInstance from "swiper";
import {
	handleTouchEnd,
	handleTouchMove,
	handleTouchStart,
} from "../../../utils/handleTouchDragEvent";
import { useMediaQuery } from "react-responsive";

// SwiperCore.use([Navigation]);
const Projects = () => {
	// const swiper = useRef<typeof Swiper>(null);
	// let swiper: typeof Swiper | null = null;
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

	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	return (
		<div className="mt-48 lg:mt-96 pb-96 tracking-wide">
			<div className="relative mx-5 md:mx-20">
				<Title name="projects" />
				<div className="absolute bg-black right-[-5rem] bottom-[-25rem] w-[27rem] lg:w-[35rem] xl:w-[40rem] h-[23rem] lg:h-[25rem] xl:h-[30rem] hidden md:flex justify-center items-center z-5">
					<a href="#" className="text-white text-lg">
						Explore all projects
					</a>
				</div>
			</div>
			<div className="flex border-t border-b border-black mt-40 md:mt-64 h-[45rem] md:h-[52rem] flex-col md:flex-row">
				<div className="left md:border-r border-black md:w-[208px] flex flex-row md:flex-col justify-between md:justify-start items-center px-5 md:px-0">
					<div className="icons flex justify-around mt-8 mb-10 gap-7 order-2 md:order-1">
						<button type="button">
							<img
								onClick={() => goPrev()}
								src="/assets/svg/arrow-left.svg"
								className="w-8"
								alt=""
							/>
						</button>
						<button type="button">
							<img
								onClick={() => goNext()}
								src="/assets/svg/arrow-right.svg"
								className="w-8"
								alt=""
							/>
						</button>
					</div>
					{/* <div className="flex justify-center order-1 md:order-2">
						<h1 className="current text-7xl font-[900] font">3</h1>
						<div className="all text-2xl mt-2">/5</div>
					</div> */}
				</div>
				<div className="w-[90%] h-full">
					<Swiper
						slidesPerView={isTabletOrMobile ? 1 : 3}
						spaceBetween={40}
						ref={swiperRef}
						onSlideChange={() => {
							console.log("Slide Change");
						}}
						onSwiper={setSwiper}
						navigation={true}
						onTouchMove={(event) => handleTouchMove(event.touches, ".main-cursor")}
						onTouchStart={(event) => handleTouchStart(event.touches)}
						onTouchEnd={() => handleTouchEnd()}
						modules={[Navigation, FreeMode]}
						className="mousedrag cursor-pointer h-full w-full right p-5 md:p-10"
					>
						<SwiperSlide>
							<ProjectCards
								src={"/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ProjectCards
								src={"/assets/img/davey-gravy-DmO662qvWO8-unsplash.webp"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ProjectCards
								src={"/assets/img/dzmitry-tselabionak-dSWBjiKi5uk-unsplash.jpg"}
							/>
						</SwiperSlide>
						<SwiperSlide>
							<ProjectCards
								src={"/assets/img/osman-rana-BltXOAu8Ckw-unsplash.webp"}
							/>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
};

export default Projects;
