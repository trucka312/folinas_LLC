import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        bottomOut: {
          '0%': {     
            '-webkit-transform': 'scale(1) translateY(0)',
            transform: 'scale(1) translateY(0)',
            '-webkit-transform-origin': '50% 84%',
            'transform-origin': '50% 84%' 
          },
          '50%': {
            '-webkit-transform': 'scale(1.1) translateY(15px)',
            transform: 'scale(1.1) translateY(15px)',
            '-webkit-transform-origin': 'bottom',
            'transform-origin': 'bottom'
          },
          '100%': {     
            '-webkit-transform': 'scale(1) translateY(0)',
            transform: 'scale(1) translateY(0)',
            '-webkit-transform-origin': '50% 84%',
            'transform-origin': '50% 84%' 
          }
        },
        backInDown: {
          '0%': {
            '-webkit-transform': 'translateY(-1200px) scale(0.7)',
            transform: 'translateY(-1200px) scale(0.7)',
            opacity: '0.7'
          },
          '80%': {
            '-webkit-transform': 'translateX(0) scale(0.7)',
            transform: 'translateX(0) scale(0.7)',
            opacity: '0.7'
          },
          'to': {
            '-webkit-transform': 'scale(1)',
            transform: 'scale(1)',
            opacity: '1'
          }
        },
        shakeNext: {
          '25%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(-3px,0,0)' },
          '75%': { transform: 'translate3d(3px,0,0)' }
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            '-webkit-transform': 'translate3d(0, -100%, 0)',
            transform: 'translate3d(0, -100%, 0)'
          },
          'to': {
            opacity: '1',
            '-webkit-transform': 'translateZ(0)',
            transform: 'translateZ(0)'
          }
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            '-webkit-transform': 'translate3d(100%, 0, 0)',
            transform: 'translate3d(100%, 0, 0)'
          },
          'to': {
            opacity: '1',
            '-webkit-transform': 'translateZ(0)',
            transform: 'translateZ(0)'
          }
        },
        typeText: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        },
        scrollLeft: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-2000px)'
          }
        }
      },
      animation: {
        'bottomOut': 'bottomOut 20s ease infinite',
        'backInDown': 'backInDown 2s ease',
        'shakeNext': 'shakeNext 1s ease infinite',
        'fadeInDown': 'fadeInDown .5s ease',
        'fadeInRight': 'fadeInRight .3s ease',
        'typeText': 'typeText .5s forwards',
        'scrollLeft': 'scrollLeft 20s linear infinite'
      }
    }
  },
  plugins: [],
};
export default config;

