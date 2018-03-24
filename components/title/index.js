import { createElement as $ } from 'react';
import styled from 'styled-components';

import styles from './styles';

const Title = (props) => {
  const { className, children } = props;
  return $('h1', { className }, children);
}

export default styled(Title)`${styles}`;