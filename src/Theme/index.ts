import { colors } from './colors';

const theme = {
  breakpoints: [
    '40em', '52em', '64em',
  ],
  colors,
  space: [
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
  radii: {
    default: 4,
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, .125)',
  },
  variants: {},
};

export * from './colors';
export default theme;