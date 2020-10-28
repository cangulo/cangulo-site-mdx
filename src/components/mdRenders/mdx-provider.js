import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import CodeBlock from "./mdx-renders/code-block"
import ImgRender from "./mdx-renders/img-render"
import AlertRender from "./mdx-components/alert-render"
import ImgWithCaptionRender from "./mdx-components/img-with-caption-render"
import CaptionRender from "./mdx-components/caption.render"

const shortcodes = {
  pre: props => <div className="gatsby-highlight" {...props} />,
  code: CodeBlock,
  // img: ImgRender,
  AlertRender,
  ImgWithCaptionRender,
  ImgRender,
  CaptionRender,
  // ImgComplexRender,
  // CodeDownloader,
}

const MdxProvider = ({ mdxContent }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{mdxContent}</MDXRenderer>
  </MDXProvider>
)

export default MdxProvider
