import React from "react"
import { Container, Jumbotron } from "react-bootstrap"
import styles from "./page-title.module.scss"
import siteMetadata from "./siteMetadata/site-metadata"

const PageTitle = ({ title, subtitle, imgRelativePath }) => {
  if (!title) {
    return ""
  }

  const { siteUrl } = siteMetadata()
  return (
    title && (
      <Jumbotron
        className={styles.jumbotronStyles}
        style={
          imgRelativePath && {
            backgroundImage: `url(${siteUrl}/${imgRelativePath})`,
          }
        }
        fluid
      >
        <Container className={styles.containerTitles}>
          <h1 className={styles.textWithBackground}>{title}</h1>
          {subtitle && (
            <h4 className={styles.textWithBackground}>{subtitle}</h4>
          )}
        </Container>
      </Jumbotron>
    )
  )
}

export default PageTitle
