import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'tactical-dark': '#050605',
        'tactical-section': '#0A0D0C',
        'tactical-panel': '#111513',
        'tactical-muted': '#A8ADA8',
        'tactical-text': '#F2F2EA',
        'tactical-amber': '#D89B20',
        'tactical-olive': '#55624A',
      },
      fontFamily: {
        display: ['var(--font-barlow-condensed)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
