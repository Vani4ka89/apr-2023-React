import {FC} from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAppSelector} from "../../hooks";


const Header: FC = () => {
    const {me} = useAppSelector(state => state.authReducer);
    return (
        <div className={css.Header}>
            <h1>Logo</h1>
            {
                me ?
                    <div>
                        <h4>{me.username}</h4>
                        <button>log out</button>
                    </div>
                    :
                    <div>
                        <NavLink to={'login'}>Login</NavLink>
                        <NavLink to={'register'}>Register</NavLink>
                    </div>
            }
        </div>
    );
};

export {Header};