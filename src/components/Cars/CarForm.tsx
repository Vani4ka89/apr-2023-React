import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ICar} from "../../interfaces/car.interface";
import {carServise} from "../../services/car.servise";
import {IUseState} from "../../types/useState.type";
import {carValidate} from "../../configs/car.validate";
import './car.form.css'

interface IProps {
    setAllCars: IUseState<boolean>;
    carForUpdate: ICar | null;
    setCarForUpdate: IUseState<ICar | null>
}

const CarForm: FC<IProps> = ({setAllCars, carForUpdate, setCarForUpdate}) => {

    const {
        register, handleSubmit, reset,
        formState: {isValid, errors}, setValue
    } = useForm<ICar>({mode: 'all', resolver: joiResolver(carValidate)})

    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate, setValue])

    const save: SubmitHandler<ICar> = async (car) => {
        await carServise.create(car)
        setAllCars(prev => !prev)
        reset()
    };

    const update: SubmitHandler<ICar> = async (car) => {
        await carServise.updateById(carForUpdate!.id, car)
        setAllCars(prev => !prev)
        reset()
        setCarForUpdate(null)
    };

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Create'}</button>
            </form>
            <div>
                {errors.brand && <span>{errors.brand.message}</span>}
                {errors.price && <span>{errors.price.message}</span>}
                {errors.year && <span>{errors.year.message}</span>}
            </div>
        </div>
    );
};

export default CarForm;