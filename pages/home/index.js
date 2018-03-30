import { createElement as $ } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Title from '../../components/title';
import Button from '../../brick/Button';
import Container from '../../components/container';

import styles from './styles';

const DefaultPage = (props) => {
  const { className } = props;
  return (
    $('div', null,
      $(Head, null,
        $('title', null, 'Xavier Réquillart Full stack developer sur Paris'),
        $('meta', { name: 'description', content: "Hello, je suis Xavier Réquillart. Full stack developer javascript. Jai utilise ReactJS et NextJS pour réaliser mon site personnel."}),
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
          $('a', { href: 'https://www.linkedin.com/in/xrequillart/', className: 'item' }, $(Button, { kind: 'primary' }, 'linkedIn')),
          $('a', { href: 'https://github.com/Xrequillart', className: 'item' }, $(Button, { kind: 'success' }, 'Github')),
          $('a', { href: 'https://dribbble.com/xrequillart', className: 'item' }, $(Button, { kind: 'secondary' }, 'Dribble')),
        ),
      ),
    )
  )
}

export default styled(DefaultPage)`${styles}`;
