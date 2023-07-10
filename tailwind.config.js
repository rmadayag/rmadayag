module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/bg.png')",
      },
      colors: {
        primary: '#C63866',
        secondary: '#686868',
        accent: '#CE92A5',
        txtcolor: '#1E1E1E',
        bgcolor: '#F5DCE4',
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
