import { css } from 'styled-components';

const basic = ({ theme }) => `
  color: #0099FF;
  font-size: 26px;
  font-weight: 600;
  margin-left: 60px;
  padding: 0 30px;
  border-left: 3px solid #493097;
`;

const styles = () => css`${basic};`;

export default styles;
