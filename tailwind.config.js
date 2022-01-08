module.exports = {
	corePlugins: {
		container: false
	},
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				twnewtral: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717'
				}
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 1s ease-in-out infinite'
			}
		}
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
