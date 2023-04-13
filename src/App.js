import React from 'react';
import PostsComponent from "./components/posts.component";

const App = () => {

    const fullPost = (post) => {
        console.log(post);
    }

    return (
        <div>
            <PostsComponent fullPost={fullPost}/>
        </div>
    );
};

export default App;
