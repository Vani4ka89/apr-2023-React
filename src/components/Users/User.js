import React from 'react';

const User = ({user}) => {
    const {id, name, email} = user
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <hr/>
        </div>
    );
};

export default User;