import React from 'react';
import SimpsonsComponent from "./components/simpsons/simpsons.component";
import UsersComponent from "./components/users/users.component";


const App = () => {
    return (
        <div>
            <SimpsonsComponent/>
            <UsersComponent/>
        </div>
    );
};

export default App;