import { graphql, useStaticQuery } from "gatsby"

const siteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            siteUrl
            shareProfilePicture
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default siteMetadata
