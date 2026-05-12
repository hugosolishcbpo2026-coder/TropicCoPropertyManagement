/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep ocean blacks
        ink: {
          950: '#03080a',
          900: '#050d10',
          800: '#081418',
          700: '#0c1c22',
        },
        // Emerald greens
        emerald: {
          50: '#ebfaf2',
          100: '#c6f0db',
          200: '#8be0b8',
          300: '#4fce95',
          400: '#1eb775',
          500: '#0a9b5e',
          600: '#077a4a',
          700: '#0a5e3b',
          800: '#0d4631',
          900: '#0a3326',
          950: '#051f17',
        },
        // Metallic gold
        gold: {
          50: '#fdf9ed',
          100: '#f8efcd',
          200: '#f0dd9a',
          300: '#e6c463',
          400: '#dbac3b',
          500: '#c9912a',
          600: '#a87122',
          700: '#7d5320',
          800: '#5c3e1f',
          900: '#3d2a17',
        },
        // Coral neon
        coral: {
          50: '#fff1ee',
          100: '#ffded6',
          200: '#ffc1b2',
          300: '#ff9c83',
          400: '#ff7654',
          500: '#ff5a36',
          600: '#ee3d1e',
          700: '#c52f15',
          800: '#9a2811',
          900: '#76200f',
        },
        ivory: {
          50: '#fbf9f3',
          100: '#f5f1e8',
          200: '#e8e0c8',
          300: '#d6c89c',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Jost"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-slower': 'float 12s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 6s linear infinite',
        'spin-slow': 'spin 30s linear infinite',
        'marquee': 'marquee 40s linear infinite',
        'aurora': 'aurora 18s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-28px) translateX(12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate(0,0) rotate(0deg) scale(1)' },
          '33%': { transform: 'translate(40px,-30px) rotate(120deg) scale(1.1)' },
          '66%': { transform: 'translate(-30px,40px) rotate(240deg) scale(0.95)' },
        },
      },
      backgroundImage: {
        'emerald-radial':
          'radial-gradient(circle at 50% 50%, rgba(10,155,94,0.35), rgba(5,13,16,0) 60%)',
        'coral-radial':
          'radial-gradient(circle at 50% 50%, rgba(255,90,54,0.35), rgba(5,13,16,0) 60%)',
        'gold-shimmer':
          'linear-gradient(110deg, transparent 40%, rgba(230,196,99,0.5) 50%, transparent 60%)',
      },
      boxShadow: {
        'glow-emerald': '0 0 60px -10px rgba(10,155,94,0.55)',
        'glow-gold': '0 0 60px -10px rgba(219,172,59,0.55)',
        'glow-coral': '0 0 60px -10px rgba(255,90,54,0.55)',
        'luxury': '0 30px 80px -20px rgba(0,0,0,0.6), 0 0 1px rgba(230,196,99,0.1)',
        'inner-luxury': 'inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
