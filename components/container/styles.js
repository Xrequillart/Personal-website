import { css } from 'styled-components';

const basic = ({ theme }) => `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #FFF;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  border-radius: 5px;
`;

const styles = () => css`${basic};`;

export default styles;