import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CodeBlock from "./code-block"
import ImgRender from "./img-render"
import AlertRender from "./alert-render"
import ImgWithCaptionRender from "./img-with-caption-render"
import CaptionRender from "./caption.render"

const shortcodes = {
  pre: props => <div className="gatsby-highlight" {...props} />,
  code: CodeBlock,
  img: ImgRender,
  AlertRender,
  ImgWithCaptionRender,
  ImgRender,
  CaptionRender,
}

const MdxProvider = ({ mdxContent }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{mdxContent}</MDXRenderer>
  </MDXProvider>
)

export default MdxProvider
