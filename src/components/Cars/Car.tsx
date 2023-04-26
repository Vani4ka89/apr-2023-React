import React, {FC, useState} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {carServise} from "../../services/car.servise";
import {IUseState} from "../../types/useState.type";

interface IProps {
    car: ICar,
    setCarForUpdate:IUseState<{}>
}

const Car: FC<IProps> = ({car, setCarForUpdate}) => {

    const deleteCar = async (id: number) => {
        await carServise.deleteById(id)
    }

    const {id, year, price, brand} = car
    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <button onClick={()=> setCarForUpdate(car)}>Edit</button>
            <button onClick={() => deleteCar(id)}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;