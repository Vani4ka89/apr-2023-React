import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {commentService} from "../../services";
import {commentActions} from "../../redux";

const CommentForm = () => {

    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();

    const create = async (comment) => {
        const {data} = await commentService.create(comment);
        dispatch(commentActions.createComment(data))
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