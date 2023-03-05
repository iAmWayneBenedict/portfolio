import gsap from "gsap";
import React, { useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { useEffect } from "react";

interface Props {
	name: string;
	overrideSubClasses?: string;
	overrideConClasses?: string;
}

const Title: React.FC<Props> = ({ name, overrideSubClasses = "", overrideConClasses = "" }) => {
	const titleCon = useRef<HTMLHeadingElement>(null);
	const main = useRef<HTMLHeadingElement>(null);
	const sub = useRef<HTMLHeadingElement>(null);

	let mainSplit = new SplitType(main.current!);

	gsap.registerPlugin(ScrollTrigger);

	gsap.to(mainSplit.chars, {
		translateY: 0,
		stagger: 0.05,
		delay: 0.2,
		duration: 0.1,

		scrollTrigger: {
			trigger: main.current!,
			start: "top bottom",
			toggleActions: "restart none none reset",
		},
	});
	gsap.to(sub.current!, {
		translateY: 0,
		opacity: 1,
		duration: 1,
		delay: 1,

		scrollTrigger: {
			trigger: main.current!,
			start: "top bottom",
			toggleActions: "restart none none reset",
		},
	});

	useEffect(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: titleCon.current!,
				start: "top top",
				end: "+=100%",
				scrub: true,
			},
		});

		const speed: number = parseFloat(sub.current!.dataset.speed!);
		const movement = -(sub.current!.offsetHeight * speed);
		tl.to(sub.current!, { y: movement, ease: "none" }, 0);
	}, []);

	return (
		<div
			ref={titleCon}
			className={`${overrideConClasses ? overrideConClasses : "pt-64"} pb-20`}
		>
			<div className="relative">
				<h1
					ref={main}
					className="absolute overflow-hidden text-[45px] sm:text-[70px] md:text-[80px] lg:text-[90px] z-[1000]"
				>
					{name.toUpperCase()}
				</h1>
				<h1
					ref={sub}
					data-speed="0.5"
					className={`bg-text opacity-0 text-[120px] sm:text-[180px] md:text-[200px] lg:text-[300px] absolute left-0 top-3 md:top-5 font-[800] m-0 leading-none ${
						overrideSubClasses ? overrideSubClasses : "text-[#f1f1f1]"
					}`}
				>
					{name.toUpperCase()}
				</h1>
			</div>
		</div>
	);
};

export default Title;
