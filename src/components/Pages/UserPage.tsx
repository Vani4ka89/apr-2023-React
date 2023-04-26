import React, {FC, useEffect, useState} from 'react';

import {IUser} from "../../interfaces/user.interface";
import Users from "../Users/Users";
import {userServise} from "../../services/user.servise";
import UserForm from "../Users/UserForm";

interface IProps {

}

const UserPage: FC<IProps> = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        userServise.getAll().then(value => value.data)
            .then(users => setUsers([...users]))
    }, [])

    return (
        <div>
            <hr/>
            <UserForm/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UserPage;