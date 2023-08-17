import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
interface Props {
	children?: any;
	reference?: React.RefObject<HTMLAnchorElement>;
	to: string;
	className?: string;
}
const CustomLink: React.FC<Props> = ({ children, reference, to, className }) => {
	const navigate = useNavigate();
	const location = useLocation();
	function clickHandler(event: any, url: string) {
		event.preventDefault();
		if (location.pathname === url) return;
		gsap.to(".App", {
			opacity: 0,
			duration: 0.5,
			onComplete: () => {
				navigate(url);
			},
		});
	}
	return (
		<Link
			ref={reference}
			to={to}
			className={className}
			onClick={(event) => clickHandler(event, to)}
			aria-label={to.split("/").at(to.split("/").length - 1)}
		>
			{children}
		</Link>
	);
};

export default CustomLink;
