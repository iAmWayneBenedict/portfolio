import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
interface Props {
	children: any;
	to: string;
	className?: string;
}
const CustomLink: React.FC<Props> = ({ children, to, className }) => {
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
		<Link to={to} className={className} onClick={(event) => clickHandler(event, to)}>
			{children}
		</Link>
	);
};

export default CustomLink;
