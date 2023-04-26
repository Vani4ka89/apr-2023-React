import React, {FC} from 'react';

import {ICar} from "../../interfaces/car.interface";
import Car from "./Car";
import {IUseState} from "../../types/useState.type";

interface IProps {
    cars: ICar[],
    setCarForUpdate:IUseState<null>
}

const Cars: FC<IProps> = ({cars, setCarForUpdate}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;