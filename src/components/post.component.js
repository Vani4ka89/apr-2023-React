import React, {useState} from 'react';

const PostComponent = ({post}) => {
    const {id, title, userId, body} = post

    const [viewPost, setViewPost] = useState(false)

    return (
        <div>
            <p>id:{id}</p>
            <h3>title:{title}</h3>
            <button onClick={() => setViewPost(prevState => !prevState)}>detail</button>
            <hr/>
            {viewPost &&
                <div>
                    <div>id: {id}</div>
                    <div>userId: {userId}</div>
                    <div>title: {title}</div>
                    <div>body: {body}</div>
                </div>
            }
        </div>
    );
};

export default PostComponent;