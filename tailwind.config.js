/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand ink — matches logo dark bg #050d10 → #081418
        ink: {
          950: '#050d10',
          900: '#081418',
          800: '#0c1e26',
          700: '#102833',
          600: '#163341',
        },
        // Emerald — matches logo gradient #1eb775 → #0a3326
        emerald: {
          50:  '#e5f9ef',
          100: '#beefd4',
          200: '#85e3b1',
          300: '#4cd28d',
          400: '#1eb775',
          500: '#159b62',
          600: '#0f7d4f',
          700: '#0a5e3d',
          800: '#0a3326',
          900: '#06231a',
        },
        // Gold — matches logo gradient #f8efcd → #dbac3b → #7d5320
        gold: {
          50:  '#fdf7df',
          100: '#f8efcd',
          200: '#f0dfa0',
          300: '#e6c970',
          400: '#dbac3b',
          500: '#c08e23',
          600: '#a07118',
          700: '#7d5320',
          800: '#5a3a17',
          900: '#3a230d',
        },
        // Coral neon highlight
        coral: {
          50:  '#ffece4',
          100: '#ffcab8',
          200: '#ffa489',
          300: '#ff7d5a',
          400: '#ff5a36',
          500: '#e63f1c',
          600: '#b8300e',
          700: '#8b2208',
          800: '#5d1604',
          900: '#380c02',
        },
        ivory: {
          DEFAULT: '#f5f1e8',
          50:  '#fbf9f3',
          100: '#f5f1e8',
          200: '#e8e0c9',
          300: '#d4c9a8',
        },
        sand: '#d4c9a8',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'gold-grad':
          'linear-gradient(135deg, #f8efcd 0%, #dbac3b 45%, #7d5320 100%)',
        'emerald-grad':
          'linear-gradient(180deg, #1eb775 0%, #0a3326 100%)',
        'cinematic':
          'linear-gradient(180deg, #050d10 0%, #081418 40%, #0a3326 100%)',
        'coral-glow':
          'radial-gradient(circle at center, rgba(255,90,54,0.45) 0%, rgba(255,90,54,0) 70%)',
        'emerald-ambient':
          'radial-gradient(circle at 20% 50%, rgba(10,155,94,0.18) 0%, transparent 60%)',
        'coral-ambient':
          'radial-gradient(circle at 85% 40%, rgba(255,90,54,0.12) 0%, transparent 50%)',
      },
      boxShadow: {
        'gold-glow': '0 0 40px rgba(219,172,59,0.35), 0 0 80px rgba(219,172,59,0.15)',
        'emerald-glow': '0 0 50px rgba(30,183,117,0.4), 0 0 100px rgba(30,183,117,0.2)',
        'coral-glow': '0 0 50px rgba(255,90,54,0.5), 0 0 100px rgba(255,90,54,0.25)',
        'cinematic': '0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(219,172,59,0.08)',
        'glass': 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 20px 60px -20px rgba(0,0,0,0.55)',
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
        '3xl': '60px',
      },
      animation: {
        'float-slow': 'float 14s ease-in-out infinite',
        'float-medium': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'glow-pulse': 'glow 4s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'reveal': 'reveal 1.4s cubic-bezier(0.77,0,0.175,1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(20px,-30px,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.08)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
      letterSpacing: {
        'luxe': '0.18em',
        'ultra': '0.32em',
      },
    },
  },
  plugins: [],
}
