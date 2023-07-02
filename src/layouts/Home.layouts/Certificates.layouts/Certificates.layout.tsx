import React, { useEffect, useRef } from "react";
import Line from "../../../components/ui/Line.component";
import Title from "../../../components/ui/Title.component";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from "react-router-dom";

const Certificates = () => {
	gsap.registerPlugin(ScrollTrigger);

	const certCon = useRef<HTMLDivElement>(null);
	const certBaseCon = useRef<HTMLDivElement>(null);
	useEffect(() => {
		gsap.to(".line-one-top-cert-fill", {
			width: "100%",
			duration: 1.5,

			scrollTrigger: {
				trigger: certCon.current!,
				start: "top center",
				toggleActions: "restart none none none",
			},
		});

		gsap.to(certBaseCon.current!, {
			opacity: 1,
			duration: 1.5,

			scrollTrigger: {
				trigger: certCon.current!,
				start: "top center",
				toggleActions: "restart none none none",
			},
		});
	}, []);

	return (
		<div className="mt-48 md:mt-96 pt-48" ref={certBaseCon}>
			<div className="relative w-full" ref={certCon}>
				<div className="px-5 sm:px-12 lg:px-28 flex flex-col w-full h-full">
					<div className="relative flex justify-center">
						{/*<Title name="Certificates" overrideConClasses="pt-20" />*/}
						<h1 className="text-5xl sm:text-6xl lg:text-8xl font-inter uppercase tracking-wider mt-20">
							Certificates
						</h1>
					</div>
					<div>
						<p className="text-center mt-10 mb-16 lg:mb-20 text-sm md:text-base">
							Assurance that you're in the right hands.
						</p>
					</div>
					<Line
						position="flex self-center"
						color="bg-gray-300"
						colorHighlight="bg-black"
						id="line-one-top-cert"
					/>
					<div className="flex flex-col flex-wrap gap-10 lg:gap-20 mt-36 w-full h-full">
						<div className="flex flex-col md:flex-row gap-5 sm:gap-10 lg:gap-20">
							<div className="cert-card flex-1">
								<div className="w-full h-fit max-h-[40rem] overflow-hidden">
									<LazyLoadImage
										key={"/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"}
										alt={"/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"}
										src={"/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"}
										effect="blur"
										wrapperClassName="w-full h-full"
										className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
										style={{
											transition: "all 1s ease",
										}}
									/>
								</div>
								<p className="mt-5 md:mt-8 lg:mt-10 text-sm md:text-base">
									Take a single step at a time. Make it short yet fulfilling.
								</p>
							</div>
							<div className="cert-card flex-1">
								<div className="w-full h-fit max-h-[40rem] overflow-hidden">
									<LazyLoadImage
										key={"/assets/img/davey-gravy-DmO662qvWO8-unsplash.webp"}
										alt={"/assets/img/davey-gravy-DmO662qvWO8-unsplash.webp"}
										src={"/assets/img/davey-gravy-DmO662qvWO8-unsplash.webp"}
										effect="blur"
										wrapperClassName="w-full h-full"
										className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
										style={{
											transition: "all 1s ease",
										}}
									/>
								</div>
								<p className="mt-5 md:mt-8 lg:mt-10 text-sm md:text-base">
									Take a single step at a time. Make it short yet fulfilling.{" "}
								</p>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-5 sm:gap-10 lg:gap-20">
							<div className="cert-card flex-1">
								<div className="w-full h-fit max-h-[40rem] overflow-hidden">
									<LazyLoadImage
										key={
											"/assets/img/dzmitry-tselabionak-dSWBjiKi5uk-unsplash.jpg"
										}
										alt={
											"/assets/img/dzmitry-tselabionak-dSWBjiKi5uk-unsplash.jpg"
										}
										src={
											"/assets/img/dzmitry-tselabionak-dSWBjiKi5uk-unsplash.jpg"
										}
										effect="blur"
										wrapperClassName="w-full h-full"
										className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
										style={{
											transition: "all 1s ease",
										}}
									/>
								</div>
								<p className="mt-5 md:mt-8 lg:mt-10 text-sm md:text-base">
									Take a single step at a time. Make it short yet fulfilling.
								</p>
							</div>
							<div className="cert-card flex-1">
								<div className="w-full h-fit max-h-[40rem] overflow-hidden">
									<LazyLoadImage
										key={"/assets/img/steve-johnson-bTulpIPKxGg-unsplash.webp"}
										alt={"/assets/img/steve-johnson-bTulpIPKxGg-unsplash.webp"}
										src={"/assets/img/steve-johnson-bTulpIPKxGg-unsplash.webp"}
										effect="blur"
										wrapperClassName="w-full h-full"
										className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
										style={{
											transition: "all 1s ease",
										}}
									/>
								</div>
								<p className="mt-5 md:mt-8 lg:mt-10 text-sm md:text-base">
									Take a single step at a time. Make it short yet fulfilling.{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Certificates;
