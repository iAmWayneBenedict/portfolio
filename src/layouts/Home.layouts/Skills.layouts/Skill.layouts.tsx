import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
interface Props {
	el: {
		name: string;
		description: string;
	};
	index: number;
	SKILLS_LIST: {
		name: string;
		description: string;
	}[];
}
const Skill: React.FC<Props> = ({ el, index, SKILLS_LIST }) => {
	gsap.registerPlugin(ScrollTrigger);
	const con = useRef<HTMLDivElement>(null);
	const isLast = index === SKILLS_LIST.length - 1;
	useEffect(() => {
		gsap.to(con.current, {
			opacity: 1,
			duration: 1.5,
			scrollTrigger: {
				trigger: con.current,
				start: "top center",
				toggleActions: "restart none none reset",
			},
		});

		if (isLast) return;
		const line = con.current!.lastElementChild!.lastElementChild;
		gsap.to(line, {
			left: 0,
			duration: 2,
			ease: "expo.out",
			scrollTrigger: {
				trigger: con.current,
				start: "top center",
			},
		});
	}, []);
	return (
		<div ref={con} className="flex flex-col items-end opacity-20" key={index}>
			<h5 className="text-lg sm:text-xl md:text-2xl 2xl:text-3xl font-semibold text-[#444444]">
				0{index + 1}.
			</h5>
			<div
				className={`w-full flex flex-col gap-2 2xl:gap-5 pb-10 relative overflow-hidden ${
					!isLast && "border-b-[1px] border-b-gray-300"
				}`}
			>
				<h5 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-medium">
					{el.name}
				</h5>
				<p className="text-sm md:text-base">{el.description}</p>
				{!isLast && (
					<div className="absolute bottom-0 -left-[105%] bg-black content-[''] w-full h-[1px]"></div>
				)}
			</div>
		</div>
	);
};

export default Skill;
