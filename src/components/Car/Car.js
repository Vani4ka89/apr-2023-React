import React from 'react';

import {carService} from "../../services/car.service";

const Car = ({car, setAllCars, setCarForUpdate}) => {

    const {id, brand, price, year} = car
    const deleteCar = async () => {
        await carService.deleteById(id)
        setAllCars(prev => !prev)
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setCarForUpdate(car)}>Edit</button>
            <button onClick={() => deleteCar()}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;