import React from 'react';
import {useForm} from "react-hook-form";
import Cat from "./Cat";

const Cats = ({stateDispatch}) => {
    const [{cats}, dispatch] = stateDispatch
    const {register, handleSubmit, reset} = useForm()

    const saveCat = (cat) => {

    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>

            </form>
            {cats.map(cat=><Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export default Cats;