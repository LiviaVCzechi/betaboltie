/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eaf4',
          100: '#ccd5e9',
          200: '#99abd3',
          300: '#6682bd',
          400: '#3358a7',
          500: '#0A2463', // Main primary color
          600: '#091d50',
          700: '#07163d',
          800: '#05102a',
          900: '#020817',
        },
        secondary: {
          50: '#e7f4f7',
          100: '#d0e9ef',
          200: '#a1d3df',
          300: '#71becf',
          400: '#42a8bf',
          500: '#147D9D', // Main secondary color
          600: '#10647e',
          700: '#0c4b5e',
          800: '#08323f',
          900: '#04191f',
        },
        accent: {
          50: '#fcf4e6',
          100: '#f9e9cc',
          200: '#f3d399',
          300: '#edbd66',
          400: '#e7a733',
          500: '#E18335', // Main accent color
          600: '#b7682a',
          700: '#894e20',
          800: '#5c3415',
          900: '#2e1a0b',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            'line-height': '1.5',
            h1: {
              'line-height': '1.2',
              'font-family': 'Montserrat, system-ui, sans-serif',
            },
            h2: {
              'line-height': '1.2',
              'font-family': 'Montserrat, system-ui, sans-serif',
            },
            h3: {
              'line-height': '1.2',
              'font-family': 'Montserrat, system-ui, sans-serif',
            },
            h4: {
              'line-height': '1.2',
              'font-family': 'Montserrat, system-ui, sans-serif',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};