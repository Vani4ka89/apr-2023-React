import {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';


const Header: FC = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {Header};