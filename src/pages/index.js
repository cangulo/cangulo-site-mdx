import React from "react"
import Layout from '../components/layout'
import PostList from "../components/posts/post-list"
import { postType } from '../models/postType'

export default () => (
    <div>
        <Layout>
            <h1>Welcome</h1>
            <h1>Cheatsheets</h1>
            <PostList postType={postType.cheatsheets} />
            <h1>Latest Post</h1>
            <PostList postType={postType.blog} />

        </Layout>
    </div>
)