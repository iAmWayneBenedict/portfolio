import gsap from "gsap";
import React from "react";
import { useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation } from "react-router-dom";
interface Props {
	delay?: string | undefined;
	reverse?: boolean;
	type?: "button" | "submit" | "reset";
}

const ButtonOutlineSendMobile: React.FC<Props> = ({ delay, reverse, type = "button" }) => {
	const bg = useRef<HTMLSpanElement>(null);

	const handleMouseOver = () => {
		gsap.to(bg.current!, {
			duration: 0.4,
			top: 0,
		});
	};

	const handleMouseLeave = () => {
		gsap.to(bg.current!, {
			duration: 0.4,
			top: "100%",
			onComplete: () => {
				gsap.to(bg.current!, {
					duration: 0,
					top: "-100%",
				});
			},
		});
	};

	const handleComplete = () => {
		bg.current!.style.top = "-100%";
	};
	let isMobileView = useMediaQuery({ query: "(max-width: 480px)" });
	return (
		<button
			title="send"
			type={type}
			className="overflow-hidden mt-28 relative bg-[black] rounded-full"
			onMouseOver={() => !isMobileView && handleMouseOver()}
			onMouseLeave={() => !isMobileView && handleMouseLeave()}
			onTouchStart={() => isMobileView && handleMouseOver()}
			onTouchEnd={() => isMobileView && handleMouseLeave()}
		>
			<svg
				className="w-full h-full"
				viewBox="0 0 388 85"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="0.5"
					y="0.5"
					width="387"
					height="84"
					rx="42"
					className="lets-talk-btn-outline"
					stroke="white"
				/>
				<path
					d="M176.159 37.9091C176.057 37.0455 175.642 36.375 174.915 35.8977C174.188 35.4205 173.295 35.1818 172.239 35.1818C171.466 35.1818 170.79 35.3068 170.21 35.5568C169.636 35.8068 169.188 36.1506 168.864 36.5881C168.545 37.0256 168.386 37.5227 168.386 38.0795C168.386 38.5455 168.497 38.946 168.719 39.2812C168.946 39.6108 169.236 39.8864 169.588 40.108C169.94 40.3239 170.31 40.5028 170.696 40.6449C171.082 40.7812 171.438 40.892 171.761 40.9773L173.534 41.4545C173.989 41.5739 174.494 41.7386 175.051 41.9489C175.614 42.1591 176.151 42.446 176.662 42.8097C177.179 43.1676 177.605 43.6278 177.94 44.1903C178.276 44.7528 178.443 45.4432 178.443 46.2614C178.443 47.2045 178.196 48.0568 177.702 48.8182C177.213 49.5795 176.497 50.1847 175.554 50.6335C174.616 51.0824 173.477 51.3068 172.136 51.3068C170.886 51.3068 169.804 51.1051 168.889 50.7017C167.98 50.2983 167.264 49.7358 166.741 49.0142C166.224 48.2926 165.932 47.4545 165.864 46.5H168.045C168.102 47.1591 168.324 47.7045 168.71 48.1364C169.102 48.5625 169.597 48.8807 170.193 49.0909C170.795 49.2955 171.443 49.3977 172.136 49.3977C172.943 49.3977 173.668 49.267 174.31 49.0057C174.952 48.7386 175.46 48.3693 175.835 47.8977C176.21 47.4205 176.398 46.8636 176.398 46.2273C176.398 45.6477 176.236 45.1761 175.912 44.8125C175.588 44.4489 175.162 44.1534 174.634 43.9261C174.105 43.6989 173.534 43.5 172.92 43.3295L170.773 42.7159C169.409 42.3239 168.33 41.7642 167.534 41.0369C166.739 40.3097 166.341 39.358 166.341 38.1818C166.341 37.2045 166.605 36.3523 167.134 35.625C167.668 34.892 168.384 34.3239 169.281 33.9205C170.185 33.5114 171.193 33.3068 172.307 33.3068C173.432 33.3068 174.432 33.5085 175.307 33.9119C176.182 34.3097 176.875 34.8551 177.386 35.5483C177.903 36.2415 178.176 37.0284 178.205 37.9091H176.159ZM187.134 51.2727C185.873 51.2727 184.785 50.9943 183.87 50.4375C182.961 49.875 182.259 49.0909 181.765 48.0852C181.276 47.0739 181.032 45.8977 181.032 44.5568C181.032 43.2159 181.276 42.0341 181.765 41.0114C182.259 39.983 182.947 39.1818 183.827 38.608C184.714 38.0284 185.748 37.7386 186.93 37.7386C187.612 37.7386 188.285 37.8523 188.95 38.0795C189.614 38.3068 190.219 38.6761 190.765 39.1875C191.31 39.6932 191.745 40.3636 192.069 41.1989C192.393 42.0341 192.555 43.0625 192.555 44.2841V45.1364H182.464V43.3977H190.509C190.509 42.6591 190.362 42 190.066 41.4205C189.776 40.8409 189.362 40.3835 188.822 40.0483C188.288 39.7131 187.657 39.5455 186.93 39.5455C186.129 39.5455 185.435 39.7443 184.85 40.142C184.271 40.5341 183.825 41.0455 183.512 41.6761C183.2 42.3068 183.043 42.983 183.043 43.7045V44.8636C183.043 45.8523 183.214 46.6903 183.555 47.3778C183.901 48.0597 184.381 48.5795 184.995 48.9375C185.609 49.2898 186.322 49.4659 187.134 49.4659C187.663 49.4659 188.14 49.392 188.566 49.2443C188.998 49.0909 189.37 48.8636 189.683 48.5625C189.995 48.2557 190.237 47.875 190.407 47.4205L192.35 47.9659C192.146 48.625 191.802 49.2045 191.319 49.7045C190.836 50.1989 190.239 50.5852 189.529 50.8636C188.819 51.1364 188.021 51.2727 187.134 51.2727ZM197.626 43.125V51H195.614V37.9091H197.558V39.9545H197.728C198.035 39.2898 198.501 38.7557 199.126 38.3523C199.751 37.9432 200.558 37.7386 201.546 37.7386C202.433 37.7386 203.208 37.9205 203.873 38.2841C204.538 38.642 205.055 39.1875 205.424 39.9205C205.793 40.6477 205.978 41.5682 205.978 42.6818V51H203.967V42.8182C203.967 41.7898 203.7 40.9886 203.165 40.4148C202.631 39.8352 201.898 39.5455 200.967 39.5455C200.325 39.5455 199.751 39.6847 199.245 39.9631C198.745 40.2415 198.35 40.6477 198.06 41.1818C197.771 41.7159 197.626 42.3636 197.626 43.125ZM214.597 51.2727C213.506 51.2727 212.543 50.9972 211.707 50.446C210.872 49.8892 210.219 49.1051 209.747 48.0938C209.276 47.0767 209.04 45.875 209.04 44.4886C209.04 43.1136 209.276 41.9205 209.747 40.9091C210.219 39.8977 210.875 39.1165 211.716 38.5653C212.557 38.0142 213.528 37.7386 214.631 37.7386C215.483 37.7386 216.156 37.8807 216.651 38.1648C217.151 38.4432 217.531 38.7614 217.793 39.1193C218.06 39.4716 218.267 39.7614 218.415 39.9886H218.585V33.5455H220.597V51H218.653V48.9886H218.415C218.267 49.2273 218.057 49.5284 217.784 49.892C217.511 50.25 217.122 50.571 216.616 50.8551C216.111 51.1335 215.438 51.2727 214.597 51.2727ZM214.869 49.4659C215.676 49.4659 216.358 49.2557 216.915 48.8352C217.472 48.4091 217.895 47.821 218.185 47.071C218.474 46.3153 218.619 45.4432 218.619 44.4545C218.619 43.4773 218.477 42.6222 218.193 41.8892C217.909 41.1506 217.489 40.5767 216.932 40.1676C216.375 39.7528 215.688 39.5455 214.869 39.5455C214.017 39.5455 213.307 39.7642 212.739 40.2017C212.176 40.6335 211.753 41.2216 211.469 41.9659C211.19 42.7045 211.051 43.5341 211.051 44.4545C211.051 45.3864 211.193 46.233 211.477 46.9943C211.767 47.75 212.193 48.3523 212.756 48.8011C213.324 49.2443 214.028 49.4659 214.869 49.4659Z"
					fill="white"
				/>
			</svg>

			<span
				ref={bg}
				className="absolute -top-full left-0 bg-white w-full h-full mix-blend-difference"
			></span>
		</button>
	);
};

export default ButtonOutlineSendMobile;
