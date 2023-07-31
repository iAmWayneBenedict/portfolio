import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import AboutSection from "../layouts/Home.layouts/About.layouts/AboutSection.layout";
import Certificates from "../layouts/Home.layouts/Certificates.layouts/Certificates.layout";
import Designs from "../layouts/Home.layouts/Designs.layouts/Designs.layout";
import Hero from "../layouts/Home.layouts/Hero.layouts/Hero.layout";
import Journey from "../layouts/Home.layouts/Journey.layouts/Journey.layout";
import Projects from "../layouts/Home.layouts/Projects.layouts/Projects.layouts";
import Skills from "../layouts/Home.layouts/Skills.layouts/Skills.layout";
import Technologies from "../layouts/Technologies/Technologies";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";
import imagesLoaded from "imagesloaded";
import { useLocation, useMatch } from "react-router-dom";
import useSmoothScroll from "../hooks/useSmoothScroll";
import gsap from "gsap";
import { Helmet } from "react-helmet-async";
interface Props {
	isLoaded: boolean;
}
const Home: React.FC<Props> = ({ isLoaded }) => {
	const home = useRef<HTMLDivElement>(null);
	const location = useLocation();

	useEffect(() => {
		const imgsLoaded = imagesLoaded(home.current!);
		imgsLoaded.on("done", () => {
			console.log("done");
			gsap.to(".App", {
				opacity: 1,
				duration: 0.1,
			});
		});
	}, []);

	return (
		<div className="overflow-x-hidden" ref={home}>
			<Helmet>
				<title>Wayne Benedict Iraola</title>
				<meta
					name="description"
					content="I am Wayne Benedict Iraola a Fullstack Developer and UX/UI Designer based in Philippines. Likes to explore new possibilities with the emerging technologies, providing digital solutions and outcomes.. Likes to explore new possibilities with the emerging technologies, providing digital solutions and outcomes."
				/>
				<link rel="canonical" href="https://www.iamwayne.tech/" />
			</Helmet>
			<Hero isLoaded={isLoaded} />
			{/* <AboutSection /> */}
			{/*<Journey />*/}
			<Skills />
			<Projects />
			<Designs />
			<Certificates />
			<Technologies />
			<ContactLayouts />
		</div>
	);
};

export default Home;
