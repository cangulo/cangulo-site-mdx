import React from "react"
import { Button } from "react-bootstrap"
import { Link } from "gatsby"
import styles from "./card.module.scss"

const CardBrowseAll = ({ link, label }) => (
  <div className={styles.container}>
    <Link to={link}>
      <Button variant="outline-primary">{label}</Button>
    </Link>
  </div>
)

export default CardBrowseAll
