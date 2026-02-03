import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Volentis Colors
        'volentis-navy': '#1B3A4B',
        'volentis-cyan': '#2AAAD9',
        'volentis-cyan-hover': '#30A9D6',
        
        // Backgrounds
        'bg-white': '#FFFFFF',
        'bg-light': '#F8F9FB',
        'bg-light-blue': '#F2F9FC',
        
        // Text
        'text-dark': '#222222',
        'text-body': '#666666',
        'text-muted': '#777777',
        
        // Accents
        'accent-success': '#4ECDC4',
        'accent-light': '#7DD3E8',
        'navy-dark': '#0F2A38',
        'border-gray': '#94A3B8',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(27, 58, 75, 0.1), 0 2px 4px -1px rgba(27, 58, 75, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(27, 58, 75, 0.1), 0 4px 6px -2px rgba(27, 58, 75, 0.05)',
      },
      borderRadius: {
        'card': '12px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'typing': 'typing 3s steps(40) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typing: {
          '0%, 100%': { width: '0' },
          '50%': { width: '100%' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
