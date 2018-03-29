import { css } from 'styled-components';

import theme from '../../theme';

const basic = (props) => `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-item: center;
  .item {
    padding-right: 15px;
  }
`;

const styles = props => css`${basic};`;

export default styles;
