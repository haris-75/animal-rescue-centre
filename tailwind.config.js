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
        secondary: '#F8DB46',
        white: '#FFFFFF',
        'white-secondary': '#f5f5f5',
      },
    },
    screens: {
      xs: '350px',
      sm: '640px',
      md: '768px',
      'md-lg': '850px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
};
