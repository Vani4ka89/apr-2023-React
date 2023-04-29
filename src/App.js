import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";
import UsersPage from "./pages/UsersPage";
import CommentsPage from "./pages/CommentsPage";
import CarsPage from "./pages/CarsPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'users'}/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}/>
                    <Route path={'cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;