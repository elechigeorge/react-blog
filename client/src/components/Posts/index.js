import React, { useEffect, useState } from 'react'
import Post from '../Post';
import { useSelector } from 'react-redux'

function Posts() {

    const posts = useSelector(state => state.posts.posts)


    return (
        <div>
            <Post posts={posts} />
        </div>
    )
}

export default Posts;
