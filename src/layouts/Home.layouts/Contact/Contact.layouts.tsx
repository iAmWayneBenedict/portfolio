export const ContactLayouts = () => {
	return (
		<div className="mt-40 bg-black pt-48 pb-20 px-10 lg:px-24">
			<div className="text-white flex justify-between flex-col lg:flex-row">
				<div>
					<a href="#">
						<h1 className="flex">
							<span
								className="font-neueMontrealRegular"
								style={{ fontSize: "clamp(3.75rem, 10vw, 6.75rem)" }}
							>
								LET'S TALK.
							</span>
							<img
								src="/assets/ico/arrow-up-right.svg"
								style={{ width: "clamp(6rem, 10vw, 10rem)" }}
								alt=""
							/>
						</h1>
					</a>
					<div className="mt-16 flex flex-col gap-10">
						<p>Open for Collaboration</p>
						<p>Available for Freelance Work</p>
					</div>
				</div>
				<div className="flex flex-row lg:flex-col gap-10 mt-24 lg:mt-0">
					<a href="#">
						<img src="/assets/ico/github.svg" alt="" />
					</a>

					<a href="#">
						<img src="/assets/ico/linkedin.svg" alt="" />
					</a>

					<a href="#">
						<img src="/assets/ico/dribbble%201.svg" alt="" />
					</a>
				</div>
			</div>
			<div className="text-white mt-36 lg:mt-56 flex justify-between">
				<div>
					<a href="#">Terms and Conditions</a>
				</div>
				<div>
					<span>
						<span>©</span>
						<span>2022 | WAYNE</span>
					</span>
				</div>
			</div>
		</div>
	);
};
