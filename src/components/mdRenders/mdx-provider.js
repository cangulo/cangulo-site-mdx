import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CodeBlock from "./code-block"

const shortcodes = {
  pre: props => <div className="gatsby-highlight" {...props} />,
  code: CodeBlock,
} // Provide common components here

const MdxProvider = ({ mdxContent }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{mdxContent}</MDXRenderer>
  </MDXProvider>
)

export default MdxProvider
