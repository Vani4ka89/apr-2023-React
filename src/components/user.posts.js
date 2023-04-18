import React, {useEffect, useState} from 'react';
import axios from "axios";
import UserPost from "./user.post";

const UserPosts = ({userId}) => {

    const [usersPosts, setUsersPosts] = useState([])

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${userId}/posts`).then(value => value.data)
            .then(posts => setUsersPosts([...posts]))
    }, [userId])

    return (
        <div>
            {usersPosts.map(userPosts => <UserPost key={userPosts.id} userPosts={userPosts}/>)}
        </div>
    );
};

export default UserPosts;