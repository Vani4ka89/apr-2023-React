import React, {FC, useEffect, useState} from 'react';

import {ICar} from "../../interfaces/car.interface";
import Cars from "../Cars/Cars";
import {carServise} from "../../services/car.servise";
import CarForm from "../Cars/CarForm";

interface IProps {

}

const CarPage: FC<IProps> = () => {

    const [cars, setCars] = useState<ICar[]>([])
    const [allCars, setAllCars] = useState<boolean>(false)
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null)

    useEffect(() => {
        carServise.getAll().then(value => value.data)
            .then(cars => setCars([...cars]))
    }, [allCars])

    return (
        <div>
            <hr/>
            <CarForm setAllCars={setAllCars} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setAllCars={setAllCars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default CarPage;