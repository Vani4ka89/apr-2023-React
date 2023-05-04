import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../redux";

const CarForm = () => {

    const {register, handleSubmit, reset, setValue} = useForm()
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars)

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [dispatch, carForUpdate, setValue])

    const create = async (car) => {
        await carService.create(car)
        dispatch(carActions.changeTrigger())
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        dispatch(carActions.changeTrigger())
        reset()
        dispatch(carActions.setCarForUpdate(null))
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
            <hr/>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
            <hr/>
        </form>
    );
};

export default CarForm;