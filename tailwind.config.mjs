/** @type {import('tailwindcss').Config} */
import animations from 'tailwindcss-animated';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: '500px',
			...defaultTheme.screens,
		},
		extend: {
			keyframes: {
				gradient: {
					'0%': { backgroundPosition: '0% 50%' },
					'100%': { backgroundPosition: '100% 50%' },
				},
			},
			animation: {
				gradient: 'gradient 6s linear infinite',
			},
		},
	},
	plugins: [animations],
};
