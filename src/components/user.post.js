import React from 'react';

const UserPost = ({userPosts}) => {
    const {id, title, body, userId} = userPosts

    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <div>userId: {userId}</div>
        </div>
    );
};

export default UserPost;