/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1140px'
    },
    extend: {
      colors:{
        "b-pri":'#6c5ce7',
        "b-sec":'#333333',
        "card-bg-1":'#E078C5',
        "card-bg-6":'#B0EBB3',
        "card-bg-2":'#B2B377',
        "card-bg-3":'#FA7070',
        "card-bg-4":'#5AB2FD',
        "card-bg-5":'#E68994',
        "card-bg-7":'#DFA2FF',
        "card-bg-8":'#006768',
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

