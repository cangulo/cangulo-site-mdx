import React from "react"
import Layout from '../components/layout'
import PostList from '../components/posts/post-list'

export default () => (
    <div>
        <Layout>
            <h1>Cheatsheets</h1>
            <PostList/>
        </Layout>
    </div>
)