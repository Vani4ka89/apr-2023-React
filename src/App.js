import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import MainLayout from "./components/Layout/MainLayout";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import TodosPage from "./pages/TodosPage";
import Post from "./components/Post/Post";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'todos'}/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<Post/>}/>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;