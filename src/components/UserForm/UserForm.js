import React from 'react';
import {useForm} from "react-hook-form";

import {userService} from "../../services/user.service";

const UserForm = ({setUsers}) => {

    const {
        register, handleSubmit, reset
    } = useForm({mode: 'all'})

    const create = async (user) => {
        const {data} =  await userService.create(user)
        setUsers(prev => [...prev, data])
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