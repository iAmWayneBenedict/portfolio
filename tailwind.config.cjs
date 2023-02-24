/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: "Inter",
			quicksand: "Quicksand",
			neueMontrealBold: "Neue Montreal Bold",
			neueMontrealMedium: "Neue Montreal Medium",
			cinzel: "Cinzel",
		},
		extend: {
			animation: {
				splashScreen: "splashScreen 5s ease forwards",
				transferLogo: "transferLogo 1s ease forwards",
				outlineBtnSVG: "outlineBtnSVG 2s ease forwards 2s",
				scrollLine: "scrollLine 3s ease-in-out infinite 17s",
				linkFirstAnim: "linkFirstAnim .5s ease forwards",
				linkSecondAnim: "linkSecondAnim .5s ease forwards .4s",
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
				scrollLine: {
					"0%": {
						top: "-100%",
						opacity: 1,
					},
					"50%": {
						top: "100%",
						opacity: 1,
					},
					"51%": {
						opacity: 0,
					},
					"100%": {
						top: "-100%",
						opacity: 0,
					},
				},
				linkFirstAnim: {
					"0%": {
						left: "0%",
					},
					"100%": {
						left: "100%",
					},
				},
				linkSecondAnim: {
					"0%": {
						left: "-100%",
					},
					"100%": {
						left: "0%",
					},
				},
			},
		},
	},
	plugins: [],
};
