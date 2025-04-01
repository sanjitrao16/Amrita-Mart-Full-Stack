/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        bouncePop: {
          "0%": { transform: "scale(0.9)" },
          "40%": { transform: "scale(1.1)" },
          "60%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "bounce-pop": "bouncePop 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
