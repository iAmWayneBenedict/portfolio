import React, { useEffect, useRef, useState } from "react";
interface Props {
	placeholder?: string;
	name?: string;
	type?: string;
	error?: string;
}
const Input: React.FC<Props> = ({ placeholder, name, type, error }) => {
	const input = useRef<HTMLInputElement>(null);
	const [value, setValue] = useState<string>("");
	const line = useRef<HTMLSpanElement>(null);
	const label = useRef<HTMLLabelElement>(null);

	const handleLabel = (event: FocusEvent) => {
		label.current!.classList.add("active");
		if (event.type === "focusout" && input.current!.value === "") {
			label.current!.classList.remove("active");
		}
	};

	useEffect(() => {
		input.current!.addEventListener("focus", handleLabel);
		input.current!.addEventListener("focusout", handleLabel);
	}, []);
	return (
		<div className="flex relative flex-col w-full">
			<label
				ref={label}
				className="input-label absolute w-full left-0 text-white text-xl cursor-[text] transition-all duration-300 ease"
				htmlFor={name}
			>
				{placeholder}
			</label>
			<div className="flex relative flex-col w-full overflow-hidden">
				<input
					className={`${
						error ? "border-b-red-500" : "border-b-gray-500"
					} mt-10 pb-3 text-2xl lg:text-3xl 2xl:text-4xl font-light bg-transparent border-b-[1px] border-opacity-50 w-full  focus:outline-none active:outline-none outline-none`}
					name={name}
					id={name}
					type={type}
					ref={input}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<span
					ref={line}
					className={`${
						error && value ? "bg-red-500" : "bg-white"
					} absolute bottom-0 h-[1px] w-full  transition-all duration-300 ease-out`}
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

export default Input;
