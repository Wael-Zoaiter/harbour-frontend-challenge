import { colors } from './colors';

const devices = {
  small: '576px',
  mobile: '768px',
  tablet: '992px',
  desktop: '1200px',
  large: '1400px',
};

const theme = {
  media: {
    small: '(max-width: 576px)',
    mobile: '(max-width: 768px)',
    tablet: '(max-width: 992px)',
    desktop: '(max-width: 1200px)',
    large: '(max-width: 1400px)',
  },
  breakpoints: [
    devices.small, devices.mobile, devices.tablet, devices.desktop, devices.large,
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
};

export * from './colors';
export default theme;