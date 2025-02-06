/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                orange: {
  				'50': '#fff8f1',
  				'100': '#feebd2',
  				'200': '#F2A586',
  				'300': '#EB6127',
  				'400': '#DE4A0E',
  				'500': '#CD3D08',
  				'600': '#c05621',
  				'700': '#9c4221',
  				'800': '#7b341e',
  				'900': '#652b19'
  			},
			'off-white': {
  				'50': '#f9fafb',
  				'100': '#f4f5f7',
  				'200': '#ADA948',
  				'300': '#DDDDDD',
  				'400': '#E8E8E8',
  				'500': '#EDEDED',
  				'600': '#4b5563',
  				'700': '#d2d2d2',
  				'800': '#252f3f',
  				'900': '#161e2e'
  			},
  			'off-black': {
  				'50': '#f9fafb',
  				'100': '#f4f5f7',
  				'200': '#565656',
  				'400': '#27272a',
  				'300': '#1b1b1b',
  				'500': '#060606',
  				'600': '#4b5563',
  				'700': '#374151',
  				'800': '#252f3f',
  				'900': '#161e2e'
  			},
            },
            fontFamily: {
  			comfortaa: [
  				'Comfortaa',
  				'sans-serif'
  			],
  			urbanist: [
  				'Urbanist',
  				'sans-serif'
  			]
  		},
        },
    },
    plugins: [],
};