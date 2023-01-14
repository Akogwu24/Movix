import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    themeRed: 'rgba(185, 28, 28, 1)',
  },

  styles: {
    global: {
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 600,
      },
    },
  },
});

export const themeRed = 'rgba(185, 28, 28, 1)';

export const sidePadding = '10%';
