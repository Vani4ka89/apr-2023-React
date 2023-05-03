import React from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services";

const CarForm = () => {

    const {register, handleSubmit, reset} = useForm()

    const create = (car) => {
        carService.create(car)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(create)}>
            <hr/>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>Create</button>
            <hr/>
        </form>
    );
};

export default CarForm;