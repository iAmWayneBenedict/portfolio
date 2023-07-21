import React, { useEffect, useRef } from "react";
import Overlay from "./Overlay";
import Scrollbar from "smooth-scrollbar";
import ModalPlugin from "../../utils/ModalPlugin";

const data = {
	success: {
		title: "Thank you for reaching out to me!",
		body: (
			<>
				I'll make sure to promptly review your email and get back to you as soon as I can,
				within 24 hours.
				<br />
				Kindly keep an eye on your inbox for my response.
				<br />
				<br />
				Thank you.
			</>
		),
	},
	error: {
		title: "Can't process that right now.",
		body: (
			<>
				Unfortunately, your email was not successfully sent.
				<br />
				You can try again after some time.
				<br />
				<br />
				Thank you.
			</>
		),
	},
};

Scrollbar.use(ModalPlugin);

interface Props {
	status?: "success" | "error" | undefined;
	active: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<Props> = ({ status, active, setOpen }) => {
	const modal = useRef<HTMLDivElement>(null);
	const overlay = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const scroller = document.querySelector(".cursor") as HTMLElement;

		const bodyScrollBar = Scrollbar.init(scroller, {
			damping: 0.05,
			delegateTo: document,
			continuousScrolling: false,
		});

		// set the overlay and modal on the viewing Y axis
		// set the modal on the center screen
		if (active) {
			const { offset, bounding } = bodyScrollBar;
			overlay.current!.style.top = offset.y + "px";
			modal.current!.style.top = offset.y + bounding.bottom / 2 + "px";
			bodyScrollBar.scrollTo(0, offset.y, 0);
		}

		// update the modal plugin to enable or disable scrolling
		const stopScroll = (isClosed: boolean) =>
			bodyScrollBar.updatePluginOptions("modal", { open: isClosed });
		stopScroll(active);
	}, [active]);
	return (
		<>
			{active && (
				<>
					<div
						ref={modal}
						className="fixed top-[50vh] w-full px-5 lg:px-10 max-w-6xl left-1/2 -translate-x-1/2 -translate-y-1/2  z-[1001]"
					>
						<div className="flex flex-col p-10 w-full bg-white text-black">
							<div className="title">
								<h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold">
									{status && data[status].title}
								</h1>
							</div>
							<p className="mt-5">{status && data[status].body}</p>
							<div className="flex self-end mt-10">
								<button type="button" onClick={() => setOpen(false)}>
									Close
								</button>
							</div>
						</div>
					</div>
					<Overlay ref={overlay} />
				</>
			)}
		</>
	);
};

export default Modal;
