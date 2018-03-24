import { createElement as $ } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Container from '../../components/container';
import Title from '../../components/title';

const DefaultPage = (props) => {
  return (
    $('div', null,
      $(Head, null,
        $('title', null, 'about - Xavier Requillart'),
      ),
      $(Container, null,
        $(Title, null, 'XavierRequillart'),
      ),
    )
  )
}

export default DefaultPage;
