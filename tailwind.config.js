/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-x': 'slide-x 10s linear infinite',
        'scrollDown': 'scrollDown 1.5s ease-in-out infinite',
        'scrollDot': 'scrollDot 1.2s ease-in-out infinite',
        'blink': 'blink 1.2s ease-in-out infinite', // ✅ 추가됨
      },
      keyframes: {
        'slide-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scrollDown': {
          '0%': { opacity: '0', transform: 'translateY(-4px)' },
          '50%': { opacity: '1', transform: 'translateY(4px)' },
          '100%': { opacity: '0', transform: 'translateY(8px)' },
        },
        'scrollDot': {
          '0%': { transform: 'translateY(2px)', opacity: '0' },
          '30%': { opacity: '1' },
          '100%': { transform: 'translateY(20px)', opacity: '0' },
        },
        'blink': { // ✅ 추가됨
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}

export default config;