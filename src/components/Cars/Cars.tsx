import React, {FC} from 'react';

import {ICar} from "../../interfaces/car.interface";
import Car from "./Car";
import {IUseState} from "../../types/useState.type";

interface IProps {
    cars: ICar[]
    setAllCars: IUseState<boolean>
    setCarForUpdate: IUseState<ICar | null>
}

const Cars: FC<IProps> = ({cars, setAllCars, setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setAllCars={setAllCars} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;