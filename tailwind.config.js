/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        small: "360px",
        medium: "392px",
        large: "430px",
        super: "540px",
        normal: "600px",
        "2md": "880px",
        tall: { raw: "(min-height: 800px)" },
      },
      backgroundImage: {
        logoLight: "url('/png/logoHomeLight.png')",
        logoDark: "url('/png/logoHomeDark.png')",
      },
      transformOrigin: {
        "0-100": "8% 25%",
      },
    },
  },
  plugins: [],
};
