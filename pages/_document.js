import { createElement as $ } from 'react';
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage, pathname }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render () {
    return (
      $('html', null,
        $(Head, null,
          this.props.styleTags,
        ),
        $('body', { style: { 'margin': 0 } },
          $(Main),
          $(NextScript),
        )
      )
    )
  }
}