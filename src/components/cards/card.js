import React from "react"
import { Badge, Button } from "react-bootstrap"
import _ from "lodash"
import { Link } from "gatsby"
import styles from "./card.module.scss"

const Card = ({ tagName, numPostsTagged }) => (
  <div className={styles.container}>
    <Link to={`/tags/${_.kebabCase(tagName)}/`}>
      <Button variant="primary">
        {tagName}
        {numPostsTagged && (
          <Badge variant="light" className={styles.tagBadge}>
            {numPostsTagged}
          </Badge>
        )}
      </Button>
    </Link>
  </div>
)

export default Card
