import React from 'react';
import {useForm} from "react-hook-form";

import {commentService} from "../../services/comment.service";

const CommentForm = ({setComments}) => {

    const {register, handleSubmit, reset} = useForm({mode: 'all'})

    const create = async (comment) => {
        const {data} = await commentService.create(comment)
        setComments(prev => [...prev, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <hr/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button>Create</button>
            <hr/>
        </form>
    );
};

export default CommentForm;