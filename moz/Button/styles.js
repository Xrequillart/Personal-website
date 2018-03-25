import { css } from 'styled-components';

import theme from '../theme';

console.log(theme);

export const kindStyle = {
  primary: (props) => `
    border: 2px solid ${theme.blue.light};
    background: ${theme.blue.light};
    color: ${theme.white};
  `,
  danger: (props) => `
    border: 2px solid ${theme.red.light};
    background: ${theme.red.light};
    color: ${theme.white};
  `,
};

const basic = (props) => `
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 5px;
  padding: 10px 30px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(0.99);
  }
`;

const owStyle = props => props.kind && kindStyle[props.kind] && kindStyle[props.kind](props);

const styles = props => css`${basic};${owStyle(props)}`;

export default styles;
