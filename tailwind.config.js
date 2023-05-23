/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,html}'],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
				fredoka: ['Fredoka', 'sans-serif'],
			},
			colors: {
				primary: '#0E3631',
				secondary: '#0B6A5E',
			},
		},
	},
	plugins: [],
}
