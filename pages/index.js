import { createElement as $ } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Title from '../components/title';
import Container from '../components/container';

const DefaultPage = (props) => {
  const {} = props;
  return (
    $('div', null,
      $(Head, null,
        $('title', null, 'index - Xavier Requillart'),
      ),
      $(Container, null,
        $(Title, null, 'XavierRequillart'),
      ),
    )
  )
}

export default DefaultPage;
