import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    primary: 'blue',
    secondary: 'green',
  },
  font: {
    body: 'Arial, sans-serif',
  },
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.color.secondary,
  color: 'white',
  height: '100%',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('a', {
  color: vars.color.secondary,
  textDecoration: 'none',
});
