import React, {useState} from 'react';
import './App.css'

import PostsComponent from "./components/posts.component";
import LaunchesComponent from "./components/launches.component";
import UsersComponent from "./components/users.component";
import UserPosts from "./components/user.posts";

const App = () => {

    const [userId, setUserId] = useState(null)

    return (
        <div className={'container'}>
            <div className={'block-1'}>
                <PostsComponent/>
            </div>
            <div className={'block-2'}>
                <LaunchesComponent/>
            </div>
            <div className={'block-3'}>
                <UsersComponent setUserId={setUserId}/>
                {
                    userId && <UserPosts userId={userId}/>
                }
            </div>
        </div>
    );
};

export default App;
