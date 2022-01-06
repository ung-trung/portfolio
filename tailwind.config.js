module.exports = {
	corePlugins: {
		container: false
	},
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('daisyui'),
		require('@tailwindcss/line-clamp'),
		function ({ addComponents }) {
			addComponents({
				'.container': {
					maxWidth: '100%',
					'@screen sm': {
						maxWidth: '640px'
					},
					'@screen md': {
						maxWidth: '768px'
					},
					'@screen lg': {
						maxWidth: '1100px'
					},
					'@screen xl': {
						maxWidth: '1100px'
					}
				}
			})
		}
	]
}
