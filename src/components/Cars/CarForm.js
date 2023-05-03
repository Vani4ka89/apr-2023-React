import React from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const CarForm = () => {

    const {register, handleSubmit, reset} = useForm()
    const dispatch = useDispatch();

    const create = async (car) => {
        const {data} = await carService.create(car)
        dispatch(carActions.createCar(data))
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