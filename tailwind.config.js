module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
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
  plugins: [],
};
