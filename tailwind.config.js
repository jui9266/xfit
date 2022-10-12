module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      colors: {
        // default colors
        //  Slate, Gray, Zinc, Neutral, Stone, Red, Orange, Amber, Yellow,
        //  Lime, Green, Emerald, Teal, Cyan, Sky, Blue, Indigo, Violet,
        //  Purple, Fuchsia, Pink, Rose
        pink: {
          // from https://tailwindcolorgenerator.com/
          DEFAULT: '#ff71c2',
          50: '#ffa3f4',
          100: '#ff99ea',
          200: '#ff8fe0',
          300: '#ff85d6',
          400: '#ff7bcc',
          500: '#ff71c2',
          600: '#f567b8',
          700: '#eb5dae',
          800: '#e153a4',
          900: '#d7499a',
        },
        base: {
          DEFAULT: '#FAF5ED',
          50: '#ffffff',
          100: '#ffffff',
          200: '#ffffff',
          300: '#ffffff',
          400: '#fffff7',
          500: '#faf5ed',
          600: '#f0ebe3',
          700: '#e6e1d9',
          800: '#dcd7cf',
          900: '#d2cdc5',
        },
        'gray-dark': '#273444',
        'gray-light': '#d3dce6',
        main: {
          DEFAULT: '#148D70',
          50: '#2abc99',
        },
        sub: '#FFB46E',
      },
      fontSize: {
        md: ['1rem', '1.5rem'],
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
};
