import React from 'react';

const PostComponent = ({post, fullPost}) => {
    const {id, title} = post
    return (
        <div>
            <p>id:{id}</p>
            <h3>title:{title}</h3>
            <button onClick={() => fullPost(post)}>detail</button>
            <hr/>
        </div>
    );
};

export default PostComponent;