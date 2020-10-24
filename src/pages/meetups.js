import React from "react"
import Layout from '../components/layout'
import PostList from '../components/posts/post-list'
import { postType } from '../models/postType'

export default () => (
    <Layout>
        <h1>Meetups</h1>
        <PostList postType={postType.meetups} />
    </Layout>
)