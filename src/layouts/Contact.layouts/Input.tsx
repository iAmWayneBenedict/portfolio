import React, { useEffect, useRef } from "react";
interface Props {
	placeholder?: string;
	name?: string;
	type?: string;
}
const Input: React.FC<Props> = ({ placeholder, name, type }) => {
	const input = useRef<HTMLInputElement>(null);

	const handleLabel = (event: FocusEvent) => {
		input.current!.previousElementSibling?.classList.add("active");
		if (event.type === "focusout" && input.current!.value === "") {
			input.current!.previousElementSibling?.classList.remove("active");
		}
	};

	useEffect(() => {
		input.current!.addEventListener("focus", handleLabel);
		input.current!.addEventListener("focusout", handleLabel);
	}, []);
	return (
		<div className="flex relative w-full overflow-hidden">
			<label
				className="input-label absolute w-full left-0 text-white text-xl cursor-[text] transition-all duration-300 ease"
				htmlFor={name}
			>
				{placeholder}
			</label>
			<input
				className="mt-10 pb-3 text-xl bg-transparent border-b-[1px] w-full border-b-gray-500 border-opacity-50 focus:outline-none active:outline-none outline-none"
				name={name}
				id={name}
				type={type}
				ref={input}
			/>
			<span className="absolute bottom-0 bg-white h-[1px] w-full  transition-all duration-300 ease-out"></span>
		</div>
	);
};

export default Input;
