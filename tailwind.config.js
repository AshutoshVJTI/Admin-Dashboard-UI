/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'whisper': '#EAEAEA',
        'blue-cyan': '#76C3FF',
        'lighter-black': '#00072B',
        'grey-heading': "#DEE3E9",
        'grey-data': '#F5F5F5',
        'grey-border': '#DEDEDE',
        'lighter-grey': '#9A9A9A',
        'button-blue': '#8085E9',
        'accordion-default': '#DEE3E9',
        'accordion-active': '#87CE83',
        'accordion-next': '#C9EAC8',
        'textfield-label': '#474747',
        'textfield-input': '#C4C4C4'
      },
    },
    plugins: [],
  }
}
