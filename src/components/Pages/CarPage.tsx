import React, {FC, useEffect, useState} from 'react';

import {ICar} from "../../interfaces/car.interface";
import Cars from "../Cars/Cars";
import {carServise} from "../../services/car.servise";
import CarForm from "../Cars/CarForm";
import {number} from "joi";

interface IProps {

}

const CarPage: FC<IProps> = () => {

    const [cars, setCars] = useState<ICar[]>([])
    const [carForUpdate, setCarForUpdate] = useState<{}>({})

    useEffect(() => {
        carServise.getAll().then(value => value.data)
            .then(cars => setCars([...cars]))
    }, [])

    return (
        <div>
            <hr/>
            <CarForm carForUpdate={carForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export default CarPage;