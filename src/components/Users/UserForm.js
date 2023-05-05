import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {userService} from "../../services";
import {userActions} from "../../redux";

const UserForm = () => {
    const dispatch = useDispatch();
    const {register, handleSubmit, reset} = useForm();

    const create = async (user) => {
        const {data} = await userService.create(user)
        dispatch(userActions.createUser(data))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <hr/>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'username'} {...register('username')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>Create</button>
            <hr/>
        </form>
    );
};

export default UserForm;