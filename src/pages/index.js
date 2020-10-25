import { Link } from "gatsby"
import React from "react"
import AboutMeArea from "../components/aboutme"
import Layout from "../components/layout/layout"
import PostList from "../components/posts/post-list"
import { postType } from "../models/postType"
import OutlineButton from "../components/buttons/outline-btn"

export default () => (
  <Layout
    title="Hi! I'm Carlos Angulo"
    subtitle="Welcome to my blog"
    imgRelativePath="./index-page4.jpg"
  >
    <h1>Cheatsheets</h1>
    <PostList postType={postType.cheatsheets} />
    <OutlineButton toLink="/cheatsheets" label="Check all the cheatsheets!" />

    <h1>Latest Post</h1>
    <PostList postType={postType.blog} />
    <OutlineButton toLink="/blog" label="Check all the posts!" />
    <AboutMeArea />
  </Layout>
)
