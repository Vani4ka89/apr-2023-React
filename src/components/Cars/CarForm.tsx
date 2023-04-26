import React, {FC, useEffect} from 'react';
import {useForm} from "react-hook-form";

import {ICar} from "../../interfaces/car.interface";
import {carServise} from "../../services/car.servise";
import {IUseState} from "../../types/useState.type";

interface IProps {
    carForUpdate: IUseState<{}>
}

const CarForm: FC<IProps> = ({carForUpdate}) => {

    const {
        register, handleSubmit, reset,
        formState: {isValid}, setValue
    } = useForm<ICar>()

    useEffect(() => {
        if(carForUpdate) {
            setValue('brand') => carForUpdate.brand
        }
    }, [])

    const save = async (car: ICar) => {
        await carServise.create(car)
        reset()
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button disabled={!isValid}>create</button>
        </form>
    );
};

export default CarForm;