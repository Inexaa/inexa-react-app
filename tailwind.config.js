/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "about-top-bg":
        //   "linear-gradient(180deg, rgba(31, 31, 31, 0.5) 10.04%, rgba(51, 34, 255, 0.5) 92.81%), url('/images/aboutTop.webp')", "about-info-bg": "url('/images/about-info-bg.png')",

        // "partner-bg": "linear-gradient(116.57deg, #542F2F 2.38%, #111111 42.71%), url('/images/partner-bg.png')",

        "about-info-bg": "url('/images/grid-wires.png')",
        "course-shape-img": "url('/images/shape.png')",
        // "exploring-knowledge-bg": "url('./images/exploring-knowledge-bg.png')]",
      },
      container: {
        center: true,
      },
      screens: {
        ss: "360px",
        xs: "425px",
        postXs: "480px",
        mid: "991px",
        "2xl": "1440px",
        "3xl": "1600px",
        "4xl": "1800px",
      },
      height: {
        100: "100px",
      },
      borderRadius: {
        25: "25px",
        30: "30px",
        40: "40px",
        50: "50px",
        70: "70px",
        90: "90px",
        100: "100px",
      },
      fontFamily: {
        Poppins: ["Poppins", "serif"],
        Montserrat: ["Montserrat", "serif"],
      },
      colors: {
        primaryColor: "#3322FF",
        secondaryColor: "#FF4141",
        headingColor: "#282828",
        subheadingColor: "#282828",
        blackColor: "#1F1F1F",
        blackColor2: "#282828",
        whiteColor: "#ffffff",
        textColor: "#333333",
        textColor2: "#666666",
        bgColor: "#111111",
        grayColor: "#555555",
        bgGray: "#f0f2f4",
        grayColor: "#9794AA",
        grayTint: "#f6f6f6",
        grayTint2: "#9b9b9b",
        bgTintColor: "#E9EBED",
        colorBlue: "#3322FF",
        borderColor: "#797979",
        borderColor2: "#e0e0e0",
        borderColor3: "#e0e0e0",
        borderColor4: "#d9d9d9",
        inputBorderColor: "#CBCAD7",
        placeholderColor: "#686677",
        ratingColor: "#ffc21b",
        errorColor: "#d63637",
        bgGreen: "#ccdd00",
        boxShadow:
          "-1.24px -1.24px 16px 0px #FAFBFF, 2.48px 2.48px 18.58px 0px #A6ABBD80",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".text-stroke": {
          WebkitTextStroke: "1px rgba(0, 0, 0, 0.7)",
          color: "transparent",
          background:
            "-webkit-linear-gradient(180deg, #0000FF 0%, rgba(0, 128, 128, 0.81) 35%, rgba(255, 255, 255, 0.05) 75.5%)",
          WebkitBackgroundClip: "text",
        },
      });
    },
  ],
};
