import React from "react"
import AboutMeArea from "../components/aboutme"
import Layout from '../components/layout/layout'
import PostList from "../components/posts/post-list"
import { postType } from '../models/postType'

export default () => (
    <Layout
        title="Hi! I'm Carlos Angulo"
        subtitle='Back-end developer'
        imgRelativePath='./index-page4.jpg'
        >
        <h1>Cheatsheets</h1>
        <PostList postType={postType.cheatsheets} />
        <h1>Latest Post</h1>
        <PostList postType={postType.blog} />
        <AboutMeArea/>
    </Layout>
)