import React, {FC} from 'react';

import './Header.css'
import {IUseState} from "../../types/useState.type";
import {PageEnum} from "../../configs/page.enum";

interface IProps {
    setChoicePage: IUseState<PageEnum>
}

const Header: FC<IProps> = ({setChoicePage}) => {
    return (
        <div className={'Header'}>
            <button onClick={() => setChoicePage(PageEnum.USERS)}>Users</button>
            <button onClick={() => setChoicePage(PageEnum.COMMENTS)}>Comments</button>
            <button onClick={() => setChoicePage(PageEnum.CARS)}>Cars</button>
        </div>
    );
};

export default Header;