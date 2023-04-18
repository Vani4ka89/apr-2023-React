import React from 'react';

const PostComponent = ({post, setViewPost}) => {
    const {id, title} = post

    return (
        <div>
            <p>id:{id}</p>
            <h3>title:{title}</h3>
            <button onClick={() => setViewPost(post)}>detail</button>
            <hr/>
        </div>
    );
};

export default PostComponent;