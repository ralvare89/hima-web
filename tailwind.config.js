export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'hima-black': '#0d0d0d',
        'hima-dark': '#141414',
        'hima-card': '#1a1a1a',
        'hima-green': '#6b8c5e',
        'hima-green-light': '#8aad7b',
        'hima-white': '#f5f5f5',
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
