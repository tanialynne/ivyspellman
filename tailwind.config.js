/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivy-gold': '#d4af37',
        'ivy-gold-light': '#c6b56f',
        'ivy-cream': '#f5f1e8',
        'ivy-dark': '#0d0d0d',
        'ivy-dark-light': '#141414',
        'ivy-gray': '#b8b8b8',
      },
      fontFamily: {
        'cormorant': ['var(--font-cormorant)', 'serif'],
        'lora': ['var(--font-lora)', 'serif'],
        'montserrat': ['var(--font-montserrat)', 'sans-serif'],
        'allura': ['var(--font-allura)', 'cursive'],
      },
      screens: {
        'nav-break': '1200px',
      },
    },
  },
  plugins: [],
}
