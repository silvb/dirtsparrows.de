import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Footer from './footer'

import './layout.css'

const LayoutWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  background-image: radial-gradient(
    ellipse 20px 20px,
    var(--secondary-bg-color),
    var(--secondary-bg-color) 25%,
    var(--main-bg-color) 25%
  );
  background-size: 16px 16px;
  color: var(--sec-color);
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  margin: 0 auto;
  max-width: 800px;

  @media (max-width: 800px) {
    margin: ${({ noMargin }) => (noMargin ? 0 : '0 16px')};
  }
`

const Layout = ({ children, noMargin }) => {
  return (
    <>
      <LayoutWrapper>
        <Main noMargin={noMargin}>{children}</Main>
        <Footer />
      </LayoutWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noMargin: PropTypes.bool,
}

export default Layout
