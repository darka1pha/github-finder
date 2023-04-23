/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				dark: '#0d1117',
				maastrichtBlue: '#021b27',
				lightPeriwinkle: '#C2CFD9',
				yankeesBlue: '#13233A',
				flame: '#e34c26',
				tuftsBlue:'#4492EE'
			},
		},
	},
	plugins: [],
}
