import { css } from 'styled-components';

import theme from '../../theme';

const basic = () => `
  position: fixed;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 0 800px 1000px;
  border-color: transparent transparent ${theme.purple.dark} transparent;
`;

const styles = () => css`${basic};`;

export default styles;