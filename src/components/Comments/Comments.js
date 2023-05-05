import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {commentService} from "../../services";
import {commentActions} from "../../redux";
import Comment from "./Comment";

const Comments = () => {

    const {comments} = useSelector(state => state.comments)
    const dispatch = useDispatch();

    useEffect(() => {
        commentService.getAll().then(value => value.data).then(comments => dispatch(commentActions.setComments(comments)))
    }, [dispatch])

    return (
        <div>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;