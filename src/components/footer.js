import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 16px 20px;
  opacity: 0.8;

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;

    & li {
      display: inline-block;
      margin: 0;

      &:not(:last-child):after {
        content: ' ‧ ';
        padding: 0 8px;
      }

      & a {
        color: var(--sec-color);
      }
    }
  }

  @media (max-width: 800px) {
    font-size: 14px;
  }
`

const Footer = () => (
  <StyledFooter>
    <ul>
      <li>
        <span>© {new Date().getFullYear()} Dirt Sparrows</span>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/datenschutzerklaerung">Datenschutzerklärung</Link>
      </li>
      <li>
        <Link to="/impressum">Impressum</Link>
      </li>
    </ul>
  </StyledFooter>
)

export default Footer
