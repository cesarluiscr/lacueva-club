/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius: {
        '3xl': '1.5rem',
      },
      colors: {
        'lacueva-blue': '#0066CC',
        'lacueva-green': '#00AA66',
        'lacueva-yellow': '#FFDD00',
        'lacueva-dark': '#333333',
        'neon-gold': '#FFD700',
        'neon-red': '#FF1744',
        'neon-cyan': '#00D9FF',
        'dark-bg': '#0F172A',
        'dark-card': '#1E293B',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'script': ['Playfair Display', 'serif'],
        'elegant': ['Pacifico', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
