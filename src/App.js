import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import UserPage from "./pages/UserPage";
import CommentPage from "./pages/CommentPage";
import CarPage from "./pages/CarPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}/>
                <Route path={'users'} element={<UserPage/>}/>
                <Route path={'comments'} element={<CommentPage/>}/>
            </Route>
        </Routes>
    );
};

export default App;