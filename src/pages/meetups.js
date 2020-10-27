import React from "react"
import Layout from "../components/layout/layout"
import PostList from "../components/posts/post-list"
import { postType } from "../models/postType"
import { orientationList } from "../models/orientationList"

export default () => (
  <Layout title="Meetups" imgRelativePath="../meetups.jpg">
    <PostList
      postType={postType.meetups}
      orientation={orientationList.vertical}
    />
  </Layout>
)
