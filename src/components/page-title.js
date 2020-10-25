import React from "react"
import { Container, Jumbotron } from "react-bootstrap"
import styles from "./page-title.module.scss"

const PageTitle = ({ title, subtitle, imgRelativePath }) => {
  if (!title) {
    return ""
  }

  return (
    <Jumbotron
      className={styles.jumbotronStyles}
      style={imgRelativePath && { backgroundImage: `url(${imgRelativePath})` }}
      fluid
    >
      <Container className={styles.containerTitles}>
        <h1 className={styles.textWithBackground}>{title}</h1>
        {subtitle && <h4 className={styles.textWithBackground}>{subtitle}</h4>}
      </Container>
    </Jumbotron>
  )
}

export default PageTitle
