import React from "react"
import Layout from '../components/layout'
import PostList from '../components/posts/post-list'
import { postType } from '../models/postType'

export default () => (
    <Layout>
        <h1>Cheatsheets</h1>
        <PostList postType={postType.cheatsheets} />
    </Layout>
)