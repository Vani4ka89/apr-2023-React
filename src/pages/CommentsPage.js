import React from 'react';
import {Outlet} from "react-router-dom";

import Comments from "../components/Comments/Comments";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <hr/>
            <Comments/>
        </div>
    );
};

export default CommentsPage;