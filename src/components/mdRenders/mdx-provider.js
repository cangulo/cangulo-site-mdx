import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CodeBlock from "./mdx-renders/code-block"
import AlertRender from "./mdx-components/alert-render"
import CaptionRender from "./mdx-components/caption.render"
import CustomTable from "./mdx-components/custom-table-component"
import TableRender from "./mdx-components/table-render"
import { Table } from "react-bootstrap"

const shortcodes = {
  pre: props => <div className="gatsby-highlight" {...props} />,
  code: CodeBlock,
  AlertRender,
  CaptionRender,
  CustomTable,
  table: Table,
  // table: TableRender,
}

const MdxProvider = ({ mdxContent }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{mdxContent}</MDXRenderer>
  </MDXProvider>
)

export default MdxProvider
