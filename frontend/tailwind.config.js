/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50: '#FDF2F2',
          100: '#FBE8E8',
          200: '#F7D0D0',
          300: '#EF9A9A',
          400: '#E55353',
          500: '#D32F2F',
          600: '#B91C1C',
          700: '#991B1B',
          800: '#7F1D1D',
          900: '#5B1212',
          950: '#3A0B0B',
        },
        beige: {
          50: '#FAF6F0',
          100: '#EFE7DC',
          200: '#E8DED1',
          300: '#DDD1C2',
          400: '#CFBFAF',
          500: '#BFAF9C',
          600: '#9E8D7A',
          700: '#7E664F',
          800: '#5C3D38',
          900: '#3A1F1D',
        },
        dark: {
          bg: '#EFE7DC',
          surface: '#F7F2E9',
          card: '#F7F2E9',
          border: '#D8CCC0',
          hover: '#E8DED1',
        },
        light: {
          bg: '#EFE7DC',
          surface: '#F7F2E9',
          card: '#F7F2E9',
          border: '#D8CCC0',
          hover: '#E8DED1',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      }
    },
  },
  plugins: [],
}
