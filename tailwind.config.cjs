/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: "Neue Montreal",
			quicksand: "Quicksand",
			neueMontrealBold: "Neue Montreal Bold",
			neueMontrealMedium: "Neue Montreal Medium",
		},
		extend: {
			animation: {
				splashScreen: "splashScreen 5s ease forwards",
				transferLogo: "transferLogo 1s ease forwards",
				outlineBtnSVG: "outlineBtnSVG 2s ease forwards 2s",
			},
			keyframes: {
				splashScreen: {
					from: { width: "0%" },
					to: { width: "100%" },
				},
				transferLogo: {
					from: { opacity: 1 },
					to: { opacity: 0 },
				},
				outlineBtnSVG: {
					"0%": {
						strokeDashoffset: -310,
					},
					"100%": {
						strokeDashoffset: 0,
					},
				},
			},
		},
	},
	plugins: [],
};
