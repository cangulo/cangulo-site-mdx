import React from "react"
import AboutMeArea from "../components/aboutme"
import Layout from "../components/layout/layout"
import PostList from "../components/posts/post-list"
import { postType } from "../models/postType"
import OutlineButton from "../components/buttons/outline-btn"
import { orientationList } from "../models/orientationList"

export default () => (
  <Layout
    title="Hi! I'm Carlos Angulo"
    subtitle="Welcome to my blog"
    imgRelativePath="./index-page4.jpg"
  >
    <h1>Cheatsheets</h1>
    <PostList postType={postType.cheatsheets} postPerColumn={3} />
    <OutlineButton toLink="/cheatsheets" label="Check all the cheatsheets!" />

    <h1>Latest Post</h1>
    <PostList postType={postType.blog} postPerColumn={2} />
    <OutlineButton toLink="/blog" label="Check all the posts!" />
    <AboutMeArea />
  </Layout>
)
