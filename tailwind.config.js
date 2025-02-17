/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,jsx,tsx,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto'],
      },
    },
  },
  plugins: [import('flowbite/plugin')],
};
