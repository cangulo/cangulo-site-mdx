import React from "react"
import Layout from '../components/layout/layout'
import PostList from '../components/posts/post-list'
import { postType } from '../models/postType'

export default () => (
    <Layout
        title="Posts"
        imgRelativePath="./blog.jpg">
        <PostList postType={postType.blog} />
    </Layout>
)