import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CodeBlock from "./mdx-renders/code-block"
import AlertRender from "./mdx-components/alert-render"
import CaptionRender from "./mdx-components/caption.render"
import CustomTable from "./mdx-components/custom-table-component"
import TableRender from "./mdx-components/table-render"
import { Table } from "react-bootstrap"
import styles from "./mdx-provider.module.scss"

const shortcodes = {
  pre: props => <div className="gatsby-highlight" {...props} />,
  code: CodeBlock,
  AlertRender,
  CaptionRender,
  CustomTable,
  table: props => <Table striped bordered hover responsive {...props} />,
  h1: props => <h1 className={styles.customH1Styles} {...props} />,
  h2: props => <h2 className={styles.customH2Styles} {...props} />,
  h3: props => <h3 className={styles.customH3Styles} {...props} />,
  h4: props => <h4 className={styles.customH4Styles} {...props} />,
  h5: props => <h5 className={styles.customH5Styles} {...props} />,
  h6: props => <h6 className={styles.customH6Styles} {...props} />,
  p: props => <p className={styles.paragraphStyle} {...props} />,
}

const MdxProvider = ({ mdxContent }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{mdxContent}</MDXRenderer>
  </MDXProvider>
)

export default MdxProvider
