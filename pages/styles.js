import { css } from 'styled-components';

const basic = ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .container-body {
    width: 100%;
  }
`;

const styles = () => css`${basic};`;

export default styles;