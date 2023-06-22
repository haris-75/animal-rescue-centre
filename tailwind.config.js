/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      poppins: ['Poppins'],
    },

    extend: {
      colors: {
        dark: '#1E1F27',
        'dark-secondary': '#37383F',
        primary: '#FF3D9A',
        white: '#FFFFFF',
        'white-secondary': '#f5f5f5',
      },
    },
  },
  plugins: [],
};
