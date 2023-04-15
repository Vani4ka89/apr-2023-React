import React from 'react';
import PostsComponent from "./components/posts.component";
import LaunchesComponent from "./components/launches.component";
import UsersComponent from "./components/users.component";

const App = () => {

    return (
        <div>
            <PostsComponent/>
            <LaunchesComponent/>
            <UsersComponent/>
        </div>
    );
};

export default App;
