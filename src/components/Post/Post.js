import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../services/post.service";

const Post = () => {
    const [post, setPost] = useState(null)
    const {postId} = useParams()

    useEffect(() => {
        postService.getById(postId).then(value => value.data).then(post => setPost(post))
    }, [postId])

    return (
        <div>
            {post &&
                <div>
                    <div>id: {post.id}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </div>
            }
        </div>
    );
};

export default Post;