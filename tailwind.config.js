/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0a0a',
          surface: '#1a1a1a',
          card: '#222222',
          border: '#333333',
        },
        accent: {
          neon: '#00ff88',
          warm: '#ff6b35',
        },
        text: {
          primary: '#f5f5f5',
          secondary: '#a0a0a0',
          muted: '#666666',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
