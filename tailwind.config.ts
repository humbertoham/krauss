const config = {
  darkMode: 'class',

  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
  ],

  theme: {
    extend: {
      colors: {
        km: {
          black: '#1C1C1C',
          grayDark: '#383838',
          gray: '#878787',
          white: '#F7F7F7',
          red: '#C11C14',
        },
      },

      fontFamily: {
        title: ['"Allumi Std"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },

      letterSpacing: {
        wideTitle: '0.02em',
        ultraWide: '0.3em',
      },

      boxShadow: {
        soft: '0 10px 30px rgba(0, 0, 0, 0.08)',
        strong: '0 20px 50px rgba(0, 0, 0, 0.15)',
      },

      transitionTimingFunction: {
        industrial: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },

      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },

      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },

  plugins: [],
}

export default config
