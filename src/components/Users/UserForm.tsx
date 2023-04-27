import React, {FC} from 'react';

import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces/user.interface";
import {userServise} from "../../services/user.servise";
import {IUseState} from "../../types/useState.type";

interface IProps {
    setUsers: IUseState<IUser[]>
}

const UserForm: FC<IProps> = ({setUsers}) => {

    const {
        register, handleSubmit, reset,
        formState: {isValid}
    } = useForm<IUser>()

    const save: SubmitHandler<IUser> = async (user) => {
        const {data} = await userServise.create(user)
        setUsers(prevState => [...prevState, data])
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