import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/car.service";

const CarForm = ({setAllCars, carForUpdate, setCarForUpdate}) => {

    const {register, handleSubmit, reset, formState: {isValid}, setValue} = useForm({mode: 'all'})

    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate, setValue])

    const create = async (car) => {
        await carService.create(car)
        setAllCars(prev => !prev)
        reset()
    }

    const update = async (car) => {
        await carService.updateById(carForUpdate.id, car)
        setAllCars(prev => !prev)
        reset()
        setCarForUpdate(null)
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate ? update : create)}>
            <hr/>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            <hr/>
        </form>
    );
};

export default CarForm;