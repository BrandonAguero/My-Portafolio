/** @type {import('tailwindcss').Config} */
export default {
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
      },
    },
  },
  plugins: [],
};
