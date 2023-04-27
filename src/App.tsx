import React, {useState} from 'react';

import {PageEnum} from "./configs/page.enum";
import UserPage from "./components/Pages/UserPage";
import CommentPage from "./components/Pages/CommentPage";
import CarPage from "./components/Pages/CarPage";
import Header from "./components/Header/Header";
import './App.css'

const App = () => {

    const [choicePage, setChoicePage] = useState<PageEnum>(PageEnum.USERS)

    return (
        <div>
            <Header setChoicePage={setChoicePage}/>
            <div className={'main-page'}>
                {choicePage === PageEnum.USERS && <UserPage/>}
                {choicePage === PageEnum.COMMENTS && <CommentPage/>}
                {choicePage === PageEnum.CARS && <CarPage/>}
            </div>
        </div>
    );
};

export default App;
