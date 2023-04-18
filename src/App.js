import React, {useState} from 'react';
import PostsComponent from "./components/posts.component";
import LaunchesComponent from "./components/launches.component";
import UsersComponent from "./components/users.component";
import UserPosts from "./components/user.posts";

const App = () => {

    const [userId, setUserId] = useState(null)

    return (
        <div>
            <PostsComponent/>
            <LaunchesComponent/>
            <UsersComponent setUserId={setUserId}/>
            {
               userId && <UserPosts userId={userId}/>
            }
        </div>
    );
};

export default App;
