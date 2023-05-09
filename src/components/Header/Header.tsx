import {FC} from 'react';
import {NavLink} from "react-router-dom";


const Header: FC = () => {
    return (
        <div>
            <NavLink to={'cars'}>Cars</NavLink>
        </div>
    );
};

export {Header};