
export const breakpointMap = {
  xs: 420,
  sm: 620,
  md: 992,
  lg: 1024,
  xl: 1440,
};

export const fonts = {
  lato: 'lato',
};


export const breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

export const mediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
};

export const shadows = {
  level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
  active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
  success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
  warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
  focus: "0px 0px 0px 1px #F2C00D, 0px 0px 0px 4px #F2C00D60",
  inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};

export const spacing = [0, 4, 8, 16, 24, 32, 48, 64];

export const radii = {
  small: "4px",
  default: "16px",
  card: "24px",
  circle: "50%",
};

export const zIndices = {
  dropdown: 10,
  modal: 100,
};
