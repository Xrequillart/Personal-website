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
    light: '#4C93F4',
    dark: '#223762',
  },
  orange: {
    light: '#FF9F5B',
  },
  white: '#FFFFFF',
  black: '#000000',
};