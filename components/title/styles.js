import { css } from 'styled-components';

const basic = (props) => `
  color: #FFFFFF;
  font-size: 50px;
  font-weight: 600;
  padding: 0 30px;
  text-transform: uppercase;
  &:after{
    content:'.fr';
    color: #FF5959;
  }
`;

const styles = () => css`${basic};`;

export default styles;
