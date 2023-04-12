import React from 'react';

const MemberComponent = ({member}) => {
    const {name, surname, age, info, photo} = member
    return (
        <div>
            <h1>{name} {surname}__{age} years old</h1>
            <img src={photo} alt={name}/>
            <p>{info}</p>
        </div>
    );
};

export default MemberComponent;