import React from 'react';

import Car from "../Car/Car";

const Cars = ({cars, setAllCars, setCarForUpdate}) => {

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setAllCars={setAllCars} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;