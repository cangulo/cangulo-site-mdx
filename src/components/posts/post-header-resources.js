import React from "react"
import _ from "lodash"
import styles from "./post-header.module.scss"

const PostHeaderResources = resources => {
  if (resources && Object.values(resources).length > 0) {
    const resourcesEntries = Object.values(resources)
    const codeEntries = resourcesEntries.filter(x => x.type === "code")
    const videoEntries = resourcesEntries.filter(x => x.type === "video")
    if (codeEntries.length > 0 || videoEntries.length > 0) {
      return (
        <section>
          {codeEntries.length === 1 && (
            <div>
              {codeEntries.map(x => (
                <a href={x.link} style={{ marginLeft: "10px" }}>
                  Code:
                  <img
                    alt="Github"
                    src="/social-media/github.svg"
                    className={styles.icons}
                  />
                </a>
              ))}
            </div>
          )}
          {codeEntries.length > 1 && (
            <div>
              Check all the code <a href="#post-resources">here</a>
            </div>
          )}
        </section>
      )
    }
  }
  return ""
}

export default PostHeaderResources
