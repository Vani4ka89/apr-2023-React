import React, {useEffect, useState} from 'react';
import axios from "axios";
import LaunchComponent from "./launch.component";

const LaunchesComponent = () => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches').then(value => value.data)
            .then(launches => {
                const filteredLaunches = launches.filter(item => item.launch_year !== "2020");
                setLaunches(filteredLaunches);
            })
    }, [])

    return (
        <div>
            {launches.map((launch, index) => <LaunchComponent key={index} launch={launch}/>)}
        </div>
    );
};

export default LaunchesComponent;