import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostComponent from "./post.component";

const PostsComponent = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts',).then(value => value.data)
            .then(posts => setPosts([...posts]))
    }, [])

    return (
        <div>
            {
                posts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;