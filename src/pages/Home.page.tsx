import React from "react";
import AboutSection from "../layouts/Home.layouts/About.layouts/AboutSection.layout";
import Hero from "../layouts/Home.layouts/Hero.layouts/Hero.layout";
import Skills from "../layouts/Home.layouts/Skills.layouts/Skills.layout";

const Home = () => {
	return (
		<div className="mb-24">
			<Hero />
			<AboutSection />
			<Skills />
		</div>
	);
};

export default Home;
