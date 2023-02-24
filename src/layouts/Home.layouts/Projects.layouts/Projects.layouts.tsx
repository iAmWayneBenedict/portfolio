import React from "react";
import Title from "../../../components/ui/Title.component";
import ProjectCards from "./ProjectCards.component";

// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { FreeMode, Pagination, Navigation } from "swiper";
import { useRef } from "react";
// SwiperCore.use([Navigation]);
const Projects = () => {
	// const swiper = useRef<typeof Swiper>(null);
	// let swiper: typeof Swiper | null = null;
	const nextRef = useRef<HTMLImageElement>(null);
	const prevRef = useRef<HTMLImageElement>(null);

	const swiperRef = useRef(null);

	return (
		<div className="mt-96 tracking-wide">
			<div className="relative mx-5 md:mx-20">
				<Title name="projects" />
				<div className="absolute bg-black right-[-5rem] bottom-[-25rem] w-[27rem] lg:w-[35rem] xl:w-[40rem] h-[23rem] lg:h-[25rem] xl:h-[30rem] hidden md:flex justify-center items-center z-5">
					<a href="#" className="text-white text-lg">
						Explore all projects
					</a>
				</div>
			</div>
			<div className="flex border-t border-b border-black mt-40 md:mt-64 h-[35rem] md:h-[52rem] flex-col md:flex-row">
				{/* <div className="left md:border-r border-black md:basis-[13rem] flex flex-row md:flex-col justify-between md:justify-start items-center px-5 md:px-0">
					<div className="icons flex justify-around mt-8 mb-10 gap-7 order-2 md:order-1">
						<img src="/src/assets/svg/arrow-left.svg" className="w-8" alt="" />
						<img src="/src/assets/svg/arrow-right.svg" className="w-8" alt="" />
					</div>
					<div className="flex justify-center order-1 md:order-2">
						<h1 className="current text-7xl font-[900] font">3</h1>
						<div className="all text-2xl mt-2">/5</div>
					</div>
				</div> */}
				<Swiper
					slidesPerView={3}
					spaceBetween={40}
					freeMode={true}
					ref={swiperRef}
					// navigation={{
					// 	// Both prevEl & nextEl are null at render so this does not work
					// 	prevEl: prevRef.current!,
					// 	nextEl: nextRef.current!,
					// }}
					modules={[FreeMode, Pagination]}
					className="right p-5 md:p-10"
				>
					<SwiperSlide>
						<ProjectCards
							src={"/src/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ProjectCards
							src={"/src/assets/img/davey-gravy-DmO662qvWO8-unsplash.webp"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ProjectCards
							src={"/src/assets/img/dzmitry-tselabionak-dSWBjiKi5uk-unsplash.jpg"}
						/>
					</SwiperSlide>
					<SwiperSlide>
						<ProjectCards
							src={"/src/assets/img/osman-rana-BltXOAu8Ckw-unsplash.webp"}
						/>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
};

export default Projects;
