import React from "react"
import { Badge, Button } from "react-bootstrap"
import { Link } from "gatsby"
import styles from "./card.module.scss"

const Card = ({ link, label, numPosts }) => (
  <div className={styles.container}>
    <Link to={link}>
      <Button variant="primary">
        {label}
        {numPosts && (
          <Badge variant="light" className={styles.tagBadge}>
            {numPosts}
          </Badge>
        )}
      </Button>
    </Link>
  </div>
)

export default Card
