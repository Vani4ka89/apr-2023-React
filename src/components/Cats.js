import React from 'react';
import {useForm} from "react-hook-form";

import Cat from "./Cat";

const Cats = ({stateDispatch}) => {
    const [{cats}, dispatch] = stateDispatch
    const {register, handleSubmit, reset} = useForm()

    const saveCat = (cat) => {
        dispatch({type:'ADD_CAT', payload: cat})
        reset()
    };

    return (
        <div>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" placeholder={'cat'} {...register('name')}/>
                <button>createCAT</button>
            </form>
            {cats.map(cat=><Cat key={cat.id} cat={cat} dispatch={dispatch}/>)}
        </div>
    );
};

export default Cats;