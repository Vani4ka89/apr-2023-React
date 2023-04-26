import React, {FC} from 'react';

import {useForm} from "react-hook-form";
import {IUser} from "../../interfaces/user.interface";
import {userServise} from "../../services/user.servise";

interface IProps {

}

const UserForm: FC<IProps> = () => {

    const {
        register, handleSubmit, reset,
        formState: {isValid}
    } = useForm<IUser>()

    const save = async (user: IUser) => {
        await userServise.create(user)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <button disabled={!isValid}>create</button>
        </form>
    );
};

export default UserForm;