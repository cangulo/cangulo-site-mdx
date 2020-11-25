import React from "react"
import AboutMeArea from "../components/aboutme/aboutme-area"
import LayoutPage from "../components/layout/layout-page"
import PostList from "../components/posts/post-list"
import { postType } from "../models/postType"
import OutlineButton from "../components/buttons/outline-btn"
import LayoutContainer from "../components/layout/layout-container"
import PageTitle from "../components/page-title"

const IndexPage = ({ location }) => (
  <LayoutPage seoData={{ title: `Home` }} location={location}>
    <PageTitle
      title="Hi! I'm Carlos Angulo"
      subtitle="Welcome to my blog"
      imgRelativePath="./index-page4.jpg"
    />
    <LayoutContainer>
      <h1>Cheatsheets</h1>
      <PostList postType={postType.cheatsheets} numColumns={3} limit={6} />
      <OutlineButton
        toLink="/cheatsheets"
        label="Check all the cheatsheets!"
        textFont="30px"
      />

      <h1>Latest Post</h1>
      <PostList postType={postType.blog} numColumns={2} limit={6} />
      <OutlineButton
        toLink="/blog"
        label="Check all the posts!"
        textFont="30px"
      />
      <AboutMeArea />
    </LayoutContainer>
  </LayoutPage>
)

export default IndexPage
