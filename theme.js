import { injectGlobal } from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,300,400,600,700,900');

  body {
    font-family: 'Source Sans Pro', sans-serif;
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