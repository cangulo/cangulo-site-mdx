import React from "react"
import Layout from "../components/layout/layout"
import PostList from "../components/posts/post-list"
import { postType } from "../models/postType"

export default () => (
  <Layout
    title="Cheatsheets"
    subtitle="Use them to save you time 😁️"
    imgRelativePath="../cheatsheet.jpg"
  >
    <PostList postType={postType.cheatsheets} />
  </Layout>
)
