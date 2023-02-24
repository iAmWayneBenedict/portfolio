import React, { useEffect, useRef } from "react";

const TitleHeading = () => {
	const text = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!text.current) return;

		const body = document.querySelector(".App") as HTMLDivElement;
	}, []);
	return (
		<section className="red basis-2/5 z-50 mt-48">
			<div className=" max-w-[40rem] leading-[2.3] text-justify" ref={text}>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam sequi atque
				molestias porro nam eligendi corporis totam nostrum debitis mollitia qui,
				consectetur, dolore doloremque consequuntur architecto id necessitatibus asperiores
				eos eum delectus nobis laudantium numquam?
			</div>
		</section>
	);
};

export default TitleHeading;
