import { css } from 'styled-components';

import theme from '../../theme';

const basic = (props) => `
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  .content-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    .details-container {
      padding: 50px 0;
      .title {
        font-size: 45px;
        font-weight: 800;
        color: ${theme.blue.dark};
        .big-hello{
          font-size: 75px;
          color: ${theme.blue.light};
        }
      }
    }
    .buttons-container {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      .item {
        margin-right: 15px;
      }
    }
  }
  .illu {
    min-width: 50vw;
    height: 60vh;
  }
  .no-p {
    margin: 0;
  }
`;

const styles = props => css`${basic};`;

export default styles;
