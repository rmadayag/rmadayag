module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#F3ABCB',
        secondary: '#BAE6FF',
        accent: '#FF4883',
        txtcolor: '#101010',
        bgcolor: '#FFFFFF',
        bgaccent: '#F9F9F9',
      },
      fontFamily: {
        Poppins : "Poppins ",
      },
    },
  },
  plugins: [],
};
