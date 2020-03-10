module.exports = {
  siteMetadata: {
    title: `Dirt Sparrows`,
    description: `Das heißeste Garage-Rock Trio aus Hamburg.`,
    author: `@dirtsparrows`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dirt Sparrows Website`,
        short_name: `Dirt Sparrows`,
        start_url: `/`,
        background_color: `#12102b`,
        theme_color: `#db8831`,
        display: `minimal-ui`,
        icon: `src/images/dirt-sparrow-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Notable`,
          },
          {
            family: `Montserrat`,
          },
        ],
      },
    },
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  pathPrefix: '/dirt-sparrows-site',
}
