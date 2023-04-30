import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.service";
import User from "../User/User";
import UserForm from "../UserForm/UserForm";

const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(value => value.data).then(users => setUsers([...users]))
    }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;