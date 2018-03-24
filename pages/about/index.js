import { createElement as $ } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';

import Title from '../../components/title';
import styles from './styles';

const DefaultPage = (props) => {
  const { className } = props;
  return (
    $('div', { className },
      $(Head, null,
        $('title', null, 'about - Xavier Requillart'),
      ),
      $('div', { className: 'container-body' },
        $(Title, null, 'About Xavier Requillart'),
        $('div', null, $(Link, { href:'/' }, 'index')),
        $('div', null, $(Link, { href:'/about' }, 'about me')),
      ),
    )
  )
}

export default styled(DefaultPage)`${styles}`;
