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
						<h1 className="text-5xl sm:text-6xl lg:text-8xl font-inter uppercase tracking-normal md:tracking-wider mt-20">
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
						colorHighlight="bg-[black]"
						id="line-one-top-cert"
					/>
					<div className="flex flex-col flex-wrap gap-10 lg:gap-20 mt-36 w-full h-full">
						<div className="flex flex-col md:flex-row gap-5 sm:gap-10 lg:gap-20">
							<div className="cert-card flex-1">
								<div className="w-full h-auto max-h-[40rem] overflow-hidden">
									<img
										alt={"/assets/img/Screenshot 2023-08-22 165706.webp"}
										src={"/assets/img/Screenshot 2023-08-22 165706.webp"}
										className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
										style={{
											transition: "all 1s ease",
										}}
									/>
								</div>
								<p className="mt-5 md:mt-8 lg:mt-10 text-sm md:text-base">
									Python Programming Essential Course
								</p>
							</div>
							<div className="cert-card flex-1">
								<div className="w-full h-fit max-h-[40rem] overflow-hidden">
									<img
										alt={"/assets/img/Screenshot 2023-08-22 165748.webp"}
										src={"/assets/img/Screenshot 2023-08-22 165748.webp"}
										className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
										style={{
											transition: "all 1s ease",
										}}
									/>
								</div>
								<p className="mt-5 md:mt-8 lg:mt-10 text-sm md:text-base">
									Data Science Discovery
								</p>
							</div>
						</div>
						<div className="flex flex-col md:flex-row gap-5 sm:gap-10 lg:gap-20">
							<div className="cert-card flex-1">
								<div className="w-full h-fit max-h-[40rem] overflow-hidden">
									<img
										alt={"/assets/img/d156550eaf31155ce7042c592c2564b0.webp"}
										src={"/assets/img/d156550eaf31155ce7042c592c2564b0.webp"}
										className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
										style={{
											transition: "all 1s ease",
										}}
									/>
								</div>
								<p className="mt-5 md:mt-8 lg:mt-10 text-sm md:text-base">
									Technical Support Fundamentals
								</p>
							</div>
							<div className="cert-card flex-1">
								<div className="w-full h-fit max-h-[40rem] overflow-hidden">
									<img
										alt={"/assets/img/8da46cdf1200caf0512fe68b1981e20d.webp"}
										src={"/assets/img/8da46cdf1200caf0512fe68b1981e20d.webp"}
										className="bg-gray-300 w-full h-full object-cover border-0 hover:scale-[1.05]"
										style={{
											transition: "all 1s ease",
										}}
									/>
								</div>
								<p className="mt-5 md:mt-8 lg:mt-10 text-sm md:text-base">
									CCS Skills Competition (Web Design)
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
