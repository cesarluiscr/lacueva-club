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
        // Paleta Azul y Verde Moderna
        'blue-primary': '#0061FF',
        'blue-light': '#4D94FF',
        'blue-dark': '#003AAD',
        'green-primary': '#1DB87B',
        'green-light': '#4ECDA4',
        'green-dark': '#0E9D5C',
        'teal-accent': '#06B6D4',
        'lacueva-dark': '#0F172A',
        'neutral-light': '#F0F9FF',
        'neutral-gray': '#64748B',
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
