import React from 'react';

const LaunchComponent = ({launch}) => {
    const {mission_name, launch_year, links:{mission_patch_small}} = launch
    return (
        <div>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default LaunchComponent;