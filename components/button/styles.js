import { css } from 'styled-components';

import theme from '../../theme';

export const kindStyle = {
  primary: (props) => `
    border: 2px solid ${theme.purple.dark};
    background: ${theme.purple.dark};
    color: ${theme.white};
  `,
  secondary: (props) => `
    border: 2px solid ${theme.purple.light};
    background: ${theme.purple.light};
    color: ${theme.white};
  `,
  success: (props) => `
    border: 2px solid ${theme.green.light};
    background: ${theme.green.light};
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
`;

const owStyle = props => props.kind && kindStyle[props.kind] && kindStyle[props.kind](props);

const styles = props => css`${basic};${owStyle(props)}`;

export default styles;
