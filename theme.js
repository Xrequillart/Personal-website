import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,600,700,800');

  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
  }
`;

export default {
  blue: {
    light: '#0099FF',
  },
  red: {
    light: '#FF5959',
  },
  purple: {
    light: '#7E63D2',
    normal: '#493097',
    dark: '#000A49',
  },
  green: {
    light: '#50E3C2',
  },
  white: '#FFFFFF',
  black: '#000000',
};