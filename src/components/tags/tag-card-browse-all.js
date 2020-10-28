import React from "react"
import { Button, Badge } from "react-bootstrap"
import { Link } from "gatsby"
import styles from "./tag-card.module.scss"

const TagCardBrowseAll = () => (
  <div className={styles.container}>
    <Link to={`/tags`}>
      <Button variant="outline-primary">All Tags</Button>
    </Link>
  </div>
)

export default TagCardBrowseAll
