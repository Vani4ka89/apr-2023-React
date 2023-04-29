import React, {useEffect, useState} from 'react';

import {carService} from "../../services/car.service";
import Car from "../Car/Car";
import CarForm from "../CarForm/CarForm";

const Cars = () => {

    const [cars, setCars] = useState([])
    const [allCars, setAllCars] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState([])

    useEffect(() => {
        carService.getAll().then(value => value.data).then(cars => setCars([...cars]))
    }, [allCars])

    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate}/>
            {cars.map(car => <Car key={car.id} car={car} setAllCars={setAllCars} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;