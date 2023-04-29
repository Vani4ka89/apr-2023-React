import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostsPage from "./pages/PostsPage";
import TodosPage from "./pages/TodosPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'todos'} element={<TodosPage/>}/>
            </Routes>
        </div>
    );
};

export default App;