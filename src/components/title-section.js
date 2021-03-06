import React from 'react'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import SpotifyLinkButton from './spotify-link-button'

const BackgroundSection = ({ children, className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "dirt-sparrow.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage className={className} Tag="div" fluid={imageData}>
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const MainContainer = styled(BackgroundSection)`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 65% 0%;
  min-height: 76vh;
  max-width: 800px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding-top: 190px;
  margin: 40px auto 40px;

  @media (max-width: 800px) {
    margin-left: 20px;
    margin-right: 20px;
    padding-top: 100px;
  }
`

const Title = styled.h1`
  font-family: 'Notable', sans-serif;
  text-align: center;
  color: var(--main-color);
  font-size: 64px;
  margin-bottom: 50px;

  @media (max-width: 800px) {
    font-size: 40px;
  }
`

const TitleSection = () => (
  <MainContainer>
    <Title>Dirt Sparrows</Title>
    <SpotifyLinkButton
      link="spotify:artist:53KX37tmvQky7fhoiRLPzL"
      text="Hör uns auf Spotify"
    />
  </MainContainer>
)

export default TitleSection
