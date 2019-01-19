import { createElement as $ } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

import Button from '../../components/button';
import Container from '../../components/container';

import styles from './styles';

const links = [
  { href: 'https://www.linkedin.com/in/xrequillart/', kind: 'primary', name: 'LinkedIn' },
  { href: 'https://github.com/Xrequillart', kind: 'success', name: 'Github' },
];

const DefaultPage = (props) => {
  const { className } = props;
  return (
    $('div', null,
      $(Head, null,
        $('title', null, 'Xavier Réquillart - Software engineer from Paris'),
        $('meta', { name: 'description', content: "Hello, je suis Xavier Réquillart. Full stack developer javascript. Jai utilise ReactJS et NextJS pour réaliser mon site personnel." }),
      ),
      $(Container, null,
        $('div', { className },
          $('div', { className: 'content-container' },
            $('div', { className: 'details-container' },
              $('h1', { className: 'title' },
                $('p', { className: 'no-p big-hello' }, 'Hello, '),
                $('p', { className: 'no-p' }, ' my name is Xavier Réquillart'),
                $('p', { className: 'no-p' }, 'I\'m software engineer from Paris'),
              ),
              $('div', { className: 'buttons-container' },
                links.map((link) => $('a', { href: link.href, className: 'item' }, $(Button, { kind: link.kind }, link.name))),
              ),
            )
          ),
          $('img', { src: './static/illustration.svg', className: 'illu' }),
        ),
      ),
    )
  )
}

export default styled(DefaultPage)`${styles}`;
