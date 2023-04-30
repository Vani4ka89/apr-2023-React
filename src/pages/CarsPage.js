import React, {useEffect, useState} from 'react';

import Cars from "../components/Cars/Cars";
import {carService} from "../services/car.service";
import CarForm from "../components/CarForm/CarForm";

const CarsPage = () => {

    const [cars, setCars] = useState([])
    const [allCars, setAllCars] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState({})

    useEffect(() => {
        carService.getAll().then(value => value.data).then(cars => setCars([...cars]))
    }, [allCars])

    return (
        <div>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setAllCars={setAllCars}/>
        </div>
    );
};

export default CarsPage;