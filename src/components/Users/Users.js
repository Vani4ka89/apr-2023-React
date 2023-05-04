import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userService} from "../../services";
import {userActions} from "../../redux";

import User from "./User";

const Users = () => {

    const {users} = useSelector(state => state.users)
    const dispatch = useDispatch();

    useEffect(() => {
        userService.getAll().then(value => value.data).then(users => dispatch(userActions.setUsers(users)))
    }, [dispatch])

    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;