import React, {useEffect, useState} from 'react';
import {commentService} from "../../services/comment.service";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(comments => setComments([...comments]))
    }, [])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;