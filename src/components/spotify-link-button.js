import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const LinkButton = styled.a`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  border: 3px solid var(--main-color);
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 32px 48px;
  transition: background-color 200ms ease, color 200ms ease;
  color: var(--sec-color);
  opacity: 0.8;
  font-size: 64px;

  &:hover {
    background: var(--main-color);
    color: var(--main-bg-color);
  }

  & span {
    margin-top: 23px;
    font-size: 24px;
  }

  @media (max-width: 800px) {
    font-size: 40px;
    padding: 16px 24px;

    & span {
      font-size: 18px;
    }
  }
`

const SpotifyLinkButton = ({ link, text }) => (
  <LinkButton href={link}>
    <FontAwesomeIcon icon={faSpotify} size={'1x'} />
    <span>{text}</span>
  </LinkButton>
)

export default SpotifyLinkButton
