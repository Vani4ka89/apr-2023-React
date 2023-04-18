import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserComponent from "./user.component";

const UsersComponent = ({setUserId}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users').then(value => value.data)
            .then(users => setUsers([...users]))
    }, [])
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export default UsersComponent;