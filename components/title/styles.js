import { css } from 'styled-components';

import theme from '../../theme';

const basic = (props) => `
  font-size: 60px;
  font-weight: 800;
  color: ${theme.purple.dark};
  margin-top: 0;
`;

const styles = () => css`${basic};`;

export default styles;
