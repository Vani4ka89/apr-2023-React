import React, {FC} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {carServise} from "../../services/car.servise";
import {IUseState} from "../../types/useState.type";

interface IProps {
    car: ICar;
    setAllCars: IUseState<boolean>;
    setCarForUpdate: IUseState<ICar | null>
}

const Car: FC<IProps> = ({car, setAllCars, setCarForUpdate}) => {

    const deleteCar = async () => {
        await carServise.deleteById(id)
        setAllCars(prev => !prev)
    }

    const {id, year, price, brand} = car
    return (
        <div>
            <div>id: {id}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div>brand: {brand}</div>
            <button onClick={() => setCarForUpdate(car)}>Edit</button>
            <button onClick={() => deleteCar()}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;