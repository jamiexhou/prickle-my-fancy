module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Prickle my Fancy",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve:"gatsby-transformer-sharp",
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: "https://github.us14.list-manage.com/subscribe/post?u=2d8f8d521432a8712b06d176e&amp;id=5158a1d9b1",
        // timeout: 3500,
      },
    }
  ],
  pathPrefix: "/prickle-my-fancy"
}
