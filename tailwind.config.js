/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        // 'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        // 'gradient-conic':
        //   'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        'icon-xl': '1.5rem', // search size for the icon
      },
      colors: {
        'search-bg': '#e0dcdc', // search color
      },
      width: {
        'custom-width': '948px',
      },
      height: {
        'custom-height': '834px',
      },
      borderRadius: {
        'custom-radius': '15px 0px 0px 0px',
      },
      opacity: {
        0: '0',
      },
    },
  },
  plugins: [],
}
