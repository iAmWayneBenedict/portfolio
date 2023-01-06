import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React from "react";
import Title from "../../../components/ui/Title.component";
import { useEffect, useRef } from "react";

const Designs = () => {
	const text = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!text.current) return;

		const body = document.querySelector(".App") as HTMLDivElement;
	}, []);
	return (
		<div className="pb-96">
			<Title name="Designs" />
			<section className="red z-50">
				<section className="grey"></section>
				<div className="text" ref={text}>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi atque
					molestias porro nam eligendi corporis totam nostrum debitis mollitia qui,
					consectetur, dolore doloremque consequuntur architecto id necessitatibus
					asperiores eos eum delectus nobis laudantium numquam? Eum quisquam obcaecati, id
					ratione asperiores facere nesciunt rem quasi velit optio, dolores, impedit iusto
					omnis commodi dignissimos sunt voluptates at sapiente sequi autem eveniet
					laborum qui. Impedit iusto iste aspernatur nulla. Delectus explicabo, voluptatum
					reprehenderit, aliquam et cumque temporibus quas facere, dignissimos ea quidem.
				</div>
			</section>
		</div>
	);
};

export default Designs;
