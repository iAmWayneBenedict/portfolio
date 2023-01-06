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
			},
			keyframes: {
				splashScreen: {
					from: { width: "0%" },
					to: { width: "100%" },
				},
			},
		},
	},
	plugins: [],
};
