import React, { useEffect, useState } from "react";
import AboutSection from "../layouts/Home.layouts/About.layouts/AboutSection.layout";
import Certificates from "../layouts/Home.layouts/Certificates.layouts/Certificates.layout";
import Designs from "../layouts/Home.layouts/Designs.layouts/Designs.layout";
import Hero from "../layouts/Home.layouts/Hero.layouts/Hero.layout";
import Journey from "../layouts/Home.layouts/Journey.layouts/Journey.layout";
import Projects from "../layouts/Home.layouts/Projects.layouts/Projects.layouts";
import Skills from "../layouts/Home.layouts/Skills.layouts/Skills.layout";
import Technologies from "../layouts/Technologies/Technologies";
import { ContactLayouts } from "../layouts/Home.layouts/Contact/Contact.layouts";

const Home = () => {
	return (
		<>
			<Hero />
			<AboutSection />
			{/*<Journey />*/}
			<Skills />
			<Projects />
			<Designs />
			<Certificates />
			<Technologies />
			<ContactLayouts />
		</>
	);
};

export default Home;
