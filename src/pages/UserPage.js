import React from 'react';

import Users from "../components/Users/Users";
import UserForm from "../components/Users/UserForm";

const UserPage = () => {
    return (
        <div>
            <UserForm/>
            <Users/>
        </div>
    );
};

export default UserPage;