import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404" />
    <h1>Seite nicht gefunden</h1>
    <p>
      Diese Seite hast du dir ausgedacht. Gehe lieber zurück zur{' '}
      <Link to="/">Startseite</Link>.
    </p>
  </Layout>
)

export default NotFoundPage
