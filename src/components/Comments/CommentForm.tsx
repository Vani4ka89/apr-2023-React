import React, {FC} from 'react';
import {useForm} from "react-hook-form";

import {IComment} from "../../interfaces/comment.interface";
import {commentServise} from "../../services/comment.servise";

interface IProps {

}

const CommentForm: FC<IProps> = () => {

    const {
        register, handleSubmit, reset,
        formState: {isValid}
    } = useForm<IComment>()

    const save = async (comment: IComment) => {
        await commentServise.getAll()
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'body'} {...register('body')}/>
            <button disabled={!isValid}>create</button>
        </form>
    );
};

export default CommentForm;