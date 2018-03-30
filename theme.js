import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Raleway:100,300,400,600,700,800');

  body {
    font-family: 'Raleway', sans-serif;
    margin: 0;
  }
`;

export default {
  purple: {
    light: '#7E63D2',
    dark: '#000A49',
  },
  green: {
    light: '#50E3C2',
  },
  white: '#FFFFFF',
  black: '#000000',
};