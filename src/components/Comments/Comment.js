import React from 'react';

const Comment = ({comment}) => {
    const {id, name, email, body, postId} = comment
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
            <div>postId: {postId}</div>
            <hr/>
        </div>
    );
};

export default Comment;