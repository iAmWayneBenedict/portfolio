import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Input from "../layouts/Contact.layouts/Input";
import TextArea from "../layouts/Contact.layouts/TextArea";
import ButtonOutlineSend from "../components/forms/ButtonOutlineSend.component";
import { Link } from "react-router-dom";
import SplitType from "split-type";
import emailjs from "@emailjs/browser";
import envConfig from "../utils/envGetter";
import isEmail from "validator/lib/isEmail";
import PulseLoader from "react-spinners/PulseLoader";
import Modal from "../components/ui/Modal";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
	gsap.registerPlugin(ScrollTrigger);
	const title = useRef<HTMLHeadingElement>(null);
	const formCon = useRef<HTMLDivElement>(null);
	const reCaptcha = useRef<any>(null);
	const { env_user_id, env_service_id, env_template_id } = envConfig;
	const [loading, setLoading] = useState<boolean>(false);
	const [statusEmail, setStatusEmail] = useState<"success" | "error" | undefined>(undefined);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [showCaptcha, setShowCaptcha] = useState<boolean>(false);
	const [error, setError] = useState<{
		name: string;
		email: string;
		subject: string;
		message: string;
		captcha: string;
	}>({ name: "", email: "", subject: "", message: "", captcha: "" });
	useEffect(() => {
		const bgCon = document.querySelector(".bg-con") as HTMLElement;
		const nav = document.querySelector("nav") as HTMLElement;

		bgCon.style.background = "black";
		gsap.fromTo(
			bgCon,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.75,
			}
		);
		gsap.fromTo(
			nav,
			{
				opacity: 0,
			},
			{
				opacity: 1,
				duration: 0.75,
			}
		);

		return () => {
			bgCon.style.background = "white";
		};
	}, []);

	useEffect(() => {
		const titleComponents = new SplitType(".title-text");
		titleComponents.lines?.forEach((el) => {
			const span = document.createElement("span");
			el.classList.add("relative");
			el.classList.add("overflow-hidden");
			span.className =
				"bg absolute rotate-6 -top-[10%] -left-[100%] w-[500%] h-[100rem] bg-[black]";
			el.appendChild(span);
		});
		const bgs = gsap.utils.toArray(titleComponents.lines!.map((el) => el.lastElementChild));
		gsap.to(".App", {
			opacity: 1,
			duration: 0,
		});
		gsap.to(titleComponents.chars, {
			y: 0,
			duration: 0,
		});
		gsap.timeline()
			.fromTo(
				titleComponents.lines,
				{
					y: 100,
					duration: 0,
					rotate: 4,
				},
				{
					y: 0,
					stagger: 0.1,
					duration: 1.25,
					rotate: 0,
					delay: 2,
				}
			)
			.fromTo(
				title.current!.nextElementSibling,
				{
					opacity: 0,
				},
				{ opacity: 1, duration: 0.5 }
			)
			.fromTo(
				formCon.current!,
				{
					opacity: 0,
				},
				{ opacity: 1, duration: 0.5 }
			);
		bgs.forEach((el) => {
			gsap.to(el as HTMLElement, {
				top: "300%",
				duration: 1.75,
				stagger: 0.1,
				delay: 2,
			});
		});
	}, []);
	useEffect(() => {
		emailjs.init(env_user_id);
	}, []);

	const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		let hasError = false;

		setShowCaptcha(true);

		// reset error data
		setError({ name: "", email: "", subject: "", message: "", captcha: "" });

		let formData = new FormData(event.currentTarget);

		// validate form data
		for (const [key, value] of formData.entries()) {
			if (!value) {
				setError((prev) => ({ ...prev, [key]: "This field is required" }));
				hasError = true;
			} else if (key === "email" && !isEmail(value)) {
				setError((prev) => ({ ...prev, [key]: "Your email is invalid" }));
				hasError = true;
			}
		}

		if (!reCaptcha.current?.getValue()) {
			setError((prev) => ({ ...prev, captcha: "Please complete the ReCAPTCHA" }));
			return;
		}
		if (hasError) return;

		// send email
		try {
			setLoading(true);
			let res = await emailjs.send(env_service_id, env_template_id, {
				name: formData.get("name"),
				email: formData.get("email"),
				subject: formData.get("subject"),
				message: formData.get("message"),
				"g-recaptcha-response": reCaptcha.current.getValue(),
			});
			if (res.status !== 200) throw Error("Something went wrong. Please try again later");
			setLoading(false);
			setOpenModal(true);
			setStatusEmail("success");
			setShowCaptcha(false);
		} catch (error: any) {
			console.error(error);
			setLoading(false);
			setStatusEmail("error");
			if (error.text === "reCAPTCHA: The g-recaptcha-response parameter not found")
				setError((prev) => ({ ...prev, captcha: "ReCAPTCHA is required" }));
		}
	};
	return (
		<>
			<div className="pt-48 sm:pt-56 2xl:pt-96 text-white pb-10">
				<div className="px-5 md:px-24">
					<h1
						ref={title}
						className="overflow-hidden block relative max-w-7xl font-light"
						style={{ fontSize: `clamp(3rem, 6.75vw, 6rem)` }}
					>
						<p className="title-text leading-1">
							LET’S CONNECT AND GET TO KNOW EACH OTHER
						</p>
					</h1>
					<p className="mt-16 text-xl">
						Let me help you become even greater at what you do.
					</p>
				</div>
				<div ref={formCon} className="w-full flex flex-col gap-48 lg:flex-row lg:gap-0">
					<div className="px-5 md:px-24 flex-1 max-w-6xl">
						<form
							onSubmit={(event) => submitHandler(event)}
							action=""
							className="w-full flex flex-col gap-5"
						>
							<br />
							<Input
								error={error.name}
								placeholder="Your name"
								type="text"
								name="name"
							/>
							<Input
								error={error.email}
								placeholder="Email address"
								type="email"
								name="email"
							/>
							<Input
								error={error.subject}
								placeholder="Subject"
								type="text"
								name="subject"
							/>
							<TextArea
								error={error.message}
								name="message"
								placeholder="What do you wanna talk about?"
							></TextArea>

							{loading ? (
								<div className="mt-28 flex gap-7 items-center self-center">
									<PulseLoader size={10} color="#ffffff" />
									<h1 className="text-xl xl:text-2xl 2xl:text-3xl">Sending</h1>
								</div>
							) : (
								<ButtonOutlineSend type="submit" />
							)}
						</form>
						<p className="text-sm sm:text-base mt-10">
							This site is protected by reCAPTCHA and the Google Privacy Policy and
							Terms of Service apply.
						</p>

						{showCaptcha && (
							<div className="mt-10">
								<ReCAPTCHA
									sitekey={envConfig.env_recaptcha_site_id}
									ref={reCaptcha}
								/>
								{error.captcha && (
									<p className="text-red-500 text-xs md:text-sm">
										{error.captcha}
									</p>
								)}
							</div>
						)}
					</div>
					<div className="px-5 md:px-24 flex flex-col gap-36 items-end flex-1 mt-20">
						<div className="flex flex-col gap-10 items-end">
							<h1
								style={{ fontSize: "clamp(1.5rem, 6vw, 2.25rem)" }}
								className="text-right"
							>
								Open for collaboration
							</h1>
							<h1
								style={{ fontSize: "clamp(1.5rem, 6vw, 2.25rem)" }}
								className="text-right"
							>
								Available for freelance work
							</h1>
						</div>
						<div className="flex flex-col gap-3 items-end">
							<p className="text-gray-400">Directly drop me a line</p>
							<Link
								style={{ fontSize: "clamp(1.25rem, 6vw, 1.875rem)" }}
								to="mailto:wayneb.iraola@outlook.com"
							>
								<h2>wayneb.iraola@outlook.com</h2>
							</Link>
						</div>
					</div>
				</div>
				<div className="mt-64 px-5 md:px-24">
					<p className="text-gray-400 mb-10">Connect with me in</p>
					<div className="flex flex-col gap-5">
						<Link
							className="font-light w-fit"
							style={{ fontSize: "clamp(2.5rem, 10vw, 3.75rem)" }}
							to="https://www.linkedin.com/in/iamwaynebenedict/"
						>
							<h2>LinkedIn</h2>
						</Link>
						<Link
							className="font-light w-fit"
							style={{ fontSize: "clamp(2.5rem, 10vw, 3.75rem)" }}
							to="https://github.com/iAmWayneBenedict"
						>
							<h2>GitHub</h2>
						</Link>
						<Link
							className="font-light w-fit"
							style={{ fontSize: "clamp(2.5rem, 10vw, 3.75rem)" }}
							to="https://dribbble.com/iamwaynebenedict"
						>
							<h2>Dribbble</h2>
						</Link>
					</div>
				</div>
				<div className="px-5 md:px-24 flex justify-between w-full mt-48">
					<p>Terms and Conditions</p>
					<p>© 2022 | WAYNE</p>
				</div>
			</div>
			<Modal status={statusEmail} active={openModal} setOpen={setOpenModal} />
		</>
	);
};

export default Contact;
