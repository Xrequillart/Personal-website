import { createElement as $ } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Title from '../../components/title';
import Button from '../../brick/Button';
import Container from '../../components/container';

import styles from './styles';

const links = [
  { href: 'https://www.linkedin.com/in/xrequillart/', kind: 'primary', name: 'LinkedIn' },
  { href: 'https://github.com/Xrequillart', kind: 'success', name: 'Github' }
];

const DefaultPage = (props) => {
  const { className } = props;
  return (
    $('div', null,
      $(Head, null,
        $('title', null, 'Xavier Réquillart Full stack developer sur Paris'),
        $('meta', { name: 'description', content: "Hello, je suis Xavier Réquillart. Full stack developer javascript. Jai utilise ReactJS et NextJS pour réaliser mon site personnel." }),
      ),
      $(Container, null,
        $(Title, null,
          'Hello,',
          $('br'),
          "i'm Xavier Réquillart",
          $('br'),
          'Full stack developer',
        ),
        $('div', { className },
          links.map((link) => $('a', { href: link.href, className: 'item' }, $(Button, { kind: link.kind }, link.name))),
        ),
      ),
    )
  )
}

export default styled(DefaultPage) `${styles}`;
