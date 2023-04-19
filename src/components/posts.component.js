import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostComponent from "./post.component";

const PostsComponent = () => {

    const [posts, setPosts] = useState([])
    const [viewPost, setViewPost] = useState(false)

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts',).then(value => value.data)
            .then(posts => setPosts([...posts]))
    }, [])

    return (
        <div>
            <div>
                {viewPost &&
                    <div className={'post'}>
                        <div>id: {viewPost.id}</div>
                        <div>userId: {viewPost.userId}</div>
                        <div>title: {viewPost.title}</div>
                        <div>body: {viewPost.body}</div>
                    </div>
                }
            </div>
            <div>
                {posts.map(post => <PostComponent key={post.id} post={post} setViewPost={setViewPost}/>)}
            </div>
        </div>
    );
};

export default PostsComponent;