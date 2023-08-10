import { useEffect, useState } from "react";
import ProjectCards from "./ProjectCards.component";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper";
import { useRef } from "react";
import SwiperInstance from "swiper";
import { useMediaQuery } from "react-responsive";
import data from "../../../utils/data";
import { mouseOne } from "../../../components/ui/Cursor.component";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import CustomLink from "../../../components/ui/CustomLink";

// SwiperCore.use([Navigation]);
const Projects = () => {
	gsap.registerPlugin(ScrollTrigger);
	gsap.registerPlugin(CustomEase);
	const title = useRef<HTMLHeadingElement>(null);
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

	useEffect(() => {
		gsap.to(title.current, {
			letterSpacing: 0,
			scrollTrigger: {
				trigger: title.current,
			},
		});

		const imgSlides = gsap.utils.toArray(".image-slider-overlay");
		let delay = 0.5;
		imgSlides.forEach((el, index) => {
			const element = el as HTMLDivElement;
			delay += 0.3;
			gsap.to(element, {
				duration: 1,
				height: 0,
				delay,
				ease: CustomEase.create(
					"custom",
					"M0,0,C0.084,0.61,0.106,0.822,0.172,0.876,0.248,0.938,0.374,1,1,1"
				),
				scrollTrigger: {
					trigger: element.parentElement,
					start: "top center",
				},
			});

			gsap.fromTo(
				element.parentElement!.nextElementSibling,
				{ opacity: 0 },
				{
					opacity: 1,
					duration: 1,
					delay,
					scrollTrigger: {
						trigger: element.parentElement,
						start: "top center",
					},
				}
			);
		});

		gsap.fromTo(
			".line1",
			{
				width: 0,
			},
			{
				width: "100%",
				duration: 1,
				scrollTrigger: {
					trigger: ".mousedrag",
					start: "top bottom",
				},
			}
		);
		gsap.fromTo(
			".line2",
			{
				width: 0,
			},
			{
				width: "100%",
				duration: 1,
				delay: 1.2,
				scrollTrigger: {
					trigger: ".mousedrag",
					start: "top bottom",
				},
			}
		);
		gsap.fromTo(
			".line3",
			{
				height: 0,
			},
			{
				height: "100%",
				duration: 1,
				delay: 0.2,
				scrollTrigger: {
					trigger: ".mousedrag",
					start: "top bottom",
				},
			}
		);
		gsap.fromTo(
			".icons",
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 1,
				delay: 1.2,
				scrollTrigger: {
					trigger: ".icons",
					start: "top bottom",
				},
			}
		);
	}, []);

	return (
		<div id="projects" className="mt-64 lg:mt-96 pb-0 sm:pb-48 lg:pb-96 tracking-wide">
			<div className="relative mx-5 md:mx-20 flex justify-center">
				{/* <Title name="works" /> */}
				<h3
					ref={title}
					className="text-center"
					style={{ fontSize: "clamp(4rem, 13vw, 12rem)", letterSpacing: ".5em" }}
				>
					WORKS
				</h3>
				{/* <div className="absolute bg-[black] right-[-5rem] bottom-[-25rem] w-[27rem] lg:w-[35rem] xl:w-[40rem] h-[23rem] lg:h-[25rem] xl:h-[30rem] hidden md:flex justify-center items-center z-5">
					<CustomLink to="/projects" className="text-white text-lg">
						Explore all works
					</CustomLink>
				</div> */}
			</div>
			<div className="flex mt-20 md:mt-48 h-[30rem] md:h-[52rem] flex-col md:flex-row relative">
				<div className="line1 absolute top-0 left-0 bg-black w-full h-[1px]"></div>
				{!isTabletOrMobile && (
					<div className="line2 absolute bottom-0 left-0 bg-black w-full h-[1px]"></div>
				)}
				<div className="left relative md:w-[208px] flex flex-row md:flex-col justify-between md:justify-start items-center px-5 md:px-0 mt-5 md:mt-0">
					<div className="line3 absolute top-0 right-0 bg-black w-[1px] h-full"></div>
					<div className="icons hidden md:flex justify-around mt-8 mb-10 gap-7 order-2 md:order-1">
						<button title="previous" type="button">
							<img
								onClick={() => goPrev()}
								src="/assets/svg/arrow-left.svg"
								className="w-8"
								alt=""
							/>
						</button>
						<button title="next" type="button">
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
				<div className="w-full md:w-[90%] h-full">
					<Swiper
						slidesPerView={isTabletOrMobile ? 1.1 : 1.7}
						freeMode={true}
						spaceBetween={isTabletOrMobile ? 20 : 60}
						ref={swiperRef}
						onSwiper={setSwiper}
						navigation={true}
						onTouchMove={({ touches }) =>
							!isTabletOrMobile && mouseOne(touches.currentX, touches.currentY)
						}
						modules={[Navigation, FreeMode]}
						className="mousedrag cursor-pointer h-full w-full right p-5 md:p-10"
					>
						{data.projects.map((project, index) => (
							<SwiperSlide key={index} style={{ width: "fit-content" }}>
								<ProjectCards
									title={project.name}
									image={project.thumbnail_small}
									src={project.demoLink || project.videoDemo}
									URIName={project.URIName}
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
			<div className="flex md:hidden justify-center mt-20">
				<CustomLink
					to="/works"
					className="bg-black text-white py-2 px-6 rounded-3xl text-sm w-fit"
				>
					View all works
				</CustomLink>
			</div>
		</div>
	);
};

export default Projects;
