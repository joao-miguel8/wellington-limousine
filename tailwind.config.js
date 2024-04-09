/** @type {import('tailwindcss').Config} */

const fontSizes = {};
const minFontSize = 12;
const maxFontSize = 70;
const base = 16;
let i = minFontSize;
while (i <= maxFontSize) {
	fontSizes[i] = `${i / base}rem`;
	i += 2;
}

module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		fontSize: fontSizes,
		fontFamily: {
			mulish: ["Mulish", "sans-serif"],
			taviraj: ["taviraj", "serif"],
		},
		extend: {},
	},
	variants: ["hover", "focus"],
	plugins: [],
};
