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
					maxWidth: '85%',
					'@screen sm': {
						maxWidth: '85%'
					},
					'@screen md': {
						maxWidth: '85%'
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
