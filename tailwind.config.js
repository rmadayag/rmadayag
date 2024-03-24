module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/bg1.png')",
      },
      colors: {
        primary: '#00EAD4',
        secondary: '#00EAD4',
        accent: '#00EAD4',
        txtcolor: '#FFFFFF',
        bgcolor: '#101010',
      },
      fontFamily: {
        Montserrat : "Montserrat ",
      },
    },
  },
  plugins: [],
};
