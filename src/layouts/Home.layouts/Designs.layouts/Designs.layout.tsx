import Title from "../../../components/ui/Title.component";
import { useEffect, useRef } from "react";
import MarqueeCon from "./MarqueeCon.layouts";
import TitleHeading from "./TitleHeading.layouts";

const Designs = () => {
	const text = useRef<HTMLDivElement>(null);
	useEffect(() => {
		if (!text.current) return;

		const body = document.querySelector(".App") as HTMLDivElement;
	}, []);
	return (
		<div className="mt-56 py-24 text-white bg-black">
			<div>
				<h1 className="text-center text-lg">
					Immersive designs that can suffice your expectations.
				</h1>
				<MarqueeCon />
			</div>
			<div className="px-5 md:px-20 flex">
				<div className="basis-3/5">
					<Title
						name="Designs"
						overrideSubClasses="text-[#2F2F2F]"
						overrideConClasses="pt-24"
					/>
				</div>
				<TitleHeading />
			</div>
			<div className="px-5 md:px-20 mt-24 flex items-center">
				<div className="basis-1/2">
					<div className="w-2/3 h-px bg-white"></div>
				</div>
				<div className="basis-1/2 flex justify-end">
					<div className="icons inline-flex justify-around mt-8 mb-10 gap-7 order-2 md:order-1">
						<img src="/src/assets/svg/arrow-left [white].svg" className="w-12" alt="" />
						<img
							src="/src/assets/svg/arrow-right [white].svg"
							className="w-12"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="px-5 md:px-20 mt-20">
				<div className="w-full h-[70rem]">
					<img
						className="w-full h-full object-cover"
						src="/src/assets/img/daniel-korpai-r73OFSry5AI-unsplash.webp"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Designs;
