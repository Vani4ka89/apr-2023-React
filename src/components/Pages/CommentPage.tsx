import React, {FC, useEffect, useState} from 'react';

import {IComment} from "../../interfaces/comment.interface";
import {commentServise} from "../../services/comment.servise";
import Comments from "../Comments/Comments";
import CommentForm from "../Comments/CommentForm";
import './comment.page.css'

interface IProps {

}

const CommentPage: FC<IProps> = () => {

    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        commentServise.getAll().then(value => value.data)
            .then(comments => setComments([...comments]))
    }, [])

    return (
        <div className={'comments'}>
            <hr/>
            <CommentForm setComments={setComments}/>
            <hr/>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentPage;