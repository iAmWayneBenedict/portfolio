import React, { useEffect, useRef, useState } from "react";
interface Props {
	placeholder?: string;
	name?: string;
	children?: any;
}
const TextArea: React.FC<Props> = ({ placeholder, name, children }) => {
	const [value, setValue] = useState<string>("");
	const textArea = useRef<HTMLTextAreaElement>(null);

	const handleLabel = (event: FocusEvent) => {
		textArea.current!.previousElementSibling?.classList.add("active");
		if (event.type === "focusout" && textArea.current!.value === "")
			textArea.current!.previousElementSibling?.classList.remove("active");
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
		<div className="flex relative w-full overflow-hidden">
			<label
				className="input-label absolute w-full left-0 text-white text-xl cursor-[text] transition-all duration-300 ease"
				htmlFor={name}
			>
				{placeholder}
			</label>
			<textarea
				className="mt-10 pb-3 text-xl h-0 resize-none overflow-hidden bg-transparent border-b-[1px] w-full border-b-gray-500 border-opacity-50 focus:outline-none active:outline-none outline-none"
				name={name}
				id={name}
				value={value}
				ref={textArea}
				onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(event)}
			>
				{children}
			</textarea>
			<span className="absolute bottom-0 bg-white h-[1px] w-full  transition-all duration-300 ease-out"></span>
		</div>
	);
};

export default TextArea;
