import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../redux";
import Car from "./Car";
import CarForm from "./CarForm";

const Cars = () => {

    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        carService.getAll().then(value => value.data).then(cars => dispatch(carActions.setCars(cars)))
    }, [dispatch])

    return (
        <div>
            <CarForm/>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export default Cars;