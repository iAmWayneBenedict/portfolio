import React, { useEffect, useRef, useState } from "react";
interface Props {
	placeholder?: string;
	name?: string;
	children?: any;
	error?: string;
}
const TextArea: React.FC<Props> = ({ placeholder, name, children, error }) => {
	const [value, setValue] = useState<string>("");
	const textArea = useRef<HTMLTextAreaElement>(null);
	const line = useRef<HTMLSpanElement>(null);
	const label = useRef<HTMLLabelElement>(null);

	const handleLabel = (event: FocusEvent) => {
		label.current!.classList.add("active");
		if (event.type === "focusout" && textArea.current!.value === "")
			label.current!.classList.remove("active");
	};

	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const self = event.target as HTMLTextAreaElement;
		textArea.current!.style.height = "0px";
		setValue(self.value);
		const scrollHeight = textArea.current!.scrollHeight;
		textArea.current!.style.height = scrollHeight + "px";
	};

	useEffect(() => {
		if (textArea && textArea.current) {
			textArea.current?.addEventListener("focus", handleLabel);
			textArea.current?.addEventListener("focusout", handleLabel);
		}
	}, []);

	useEffect(() => {
		const scrollHeight = textArea.current!.scrollHeight;
		textArea.current!.style.height = scrollHeight + "px";
	}, [textArea]);

	return (
		<div className="flex relative w-full">
			<label
				ref={label}
				className="input-label absolute w-full left-0 text-white text-xl cursor-[text] transition-all duration-300 ease"
				htmlFor={name}
			>
				{placeholder}
			</label>
			<div className="flex relative w-full overflow-hidden">
				<textarea
					className="mt-10 pb-3 text-2xl lg:text-3xl 2xl:text-4xl font-light  h-0 resize-none overflow-hidden bg-transparent border-b-[1px] w-full border-b-gray-500 border-opacity-50 focus:outline-none active:outline-none outline-none"
					name={name}
					id={name}
					value={value}
					ref={textArea}
					onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
						handleChange(event)
					}
				>
					{children}
				</textarea>
				<span
					ref={line}
					className="absolute bottom-0 bg-white h-[1px] w-full  transition-all duration-300 ease-out"
				></span>
			</div>
			{error && (
				<p className="absolute text-red-500 text-xs md:text-sm -bottom-[1.3rem] right-0">
					{error}
				</p>
			)}
		</div>
	);
};

export default TextArea;
