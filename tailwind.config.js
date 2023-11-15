const config = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: 'repeat(1, 1fr 3fr)',
      },
      keyframes: {
        menuSlide: {
          '0%': {
            transform: 'translateX(20rem)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        menuSlide: 'menuSlide 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
