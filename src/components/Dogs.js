import React from 'react';
import {useForm} from "react-hook-form";
import Dog from "./Dog";

const Dogs = ({stateDispatch}) => {
    const [{dogs}, dispatch] = stateDispatch
    const {register, handleSubmit, reset} = useForm();

    const createDog = (dog) => {
        dispatch({type: 'ADD_DOG', payload: dog})
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(createDog)}>
                <input type="text" placeholder={'dog'} {...register('name')}/>
                <button>createDOG</button>
            </form>
            {dogs.map(dog => <Dog key={dog.id} dog={dog} dispatch={dispatch}/>)}
        </div>
    );
};

export default Dogs;