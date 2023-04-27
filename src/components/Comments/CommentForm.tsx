import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IComment} from "../../interfaces/comment.interface";
import {commentServise} from "../../services/comment.servise";
import {IUseState} from "../../types/useState.type";

interface IProps {
    setComments:IUseState<IComment[]>
}

const CommentForm: FC<IProps> = ({setComments}) => {

    const {
        register, handleSubmit, reset,
        formState: {isValid}
    } = useForm<IComment>()

    const save:SubmitHandler<IComment> = async (comment) => {
        const {data} = await commentServise.create(comment)
        setComments(prevState => [...prevState, data])
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button disabled={!isValid}>Create</button>
        </form>
    );
};

export default CommentForm;