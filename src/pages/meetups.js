import React from "react"
import Layout from "../components/layout/layout"
import PostList from "../components/posts/post-list"
import { postType } from "../models/postType"

export default () => (
  <Layout title="Meetups" imgRelativePath="../meetups.jpg">
    <PostList postType={postType.meetups} />
  </Layout>
)
