import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        tiltshaking: "tiltshaking 2.5s infinite",
        blink: "blink 1.5s infinite",
        movewords: "movewords 20s linear infinite alternate",
        movewords2: "movewords2 12s linear infinite alternate",
      },
      keyframes:{
        	tiltshaking:{
           ' 0%': { transform: 'rotate(0deg)' },
           ' 10%': { transform: 'rotate(14deg)' },
           ' 20%': { transform: 'rotate(-8deg)' },
           ' 30%': { transform: 'rotate(14deg)' },
           ' 40%': { transform: 'rotate(-4deg)' },
           ' 50%': { transform: 'rotate(10deg)' },
           ' 60%': { transform: 'rotate(0deg)' },
           ' 100%': { transform: 'rotate(0deg)' }
          },
          blink: {
            '50%': { opacity: '0' },
          },
          movewords: {
            '0%': { transform: 'translateX(0%) translateY(0%)' },
            '100%': { transform: 'translateX(-100%) translateY(0%)' },
          },
          movewords2: {
            '0%': { transform: 'translateX(-100%) translateY(0%)' },
            '100%': { transform: 'translateX(-40%) translateY(0%)' },
          },

      },
    },
  },
  plugins: [],
};
export default config;
