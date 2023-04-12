import React from 'react';

const UserComponent = ({user}) => {
    const {name, status, species, gender, image} = user
    return (
        <div>
            <h1>{name}</h1>
            <div>status: {status}</div>
            <div>species: {species}</div>
            <div>gender: {gender}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export default UserComponent;