import React from 'react';

const UserComponent = ({user}) => {
    console.log(user);
    const {id, name, username, email, phone, website, address: {city, street, suite, zipcode, geo: {lat, lng}}, company: {bs, catchPhrase}} = user
    return (
        <div>
            <div>{id}</div>
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>{website}</div>
            <div>address: {city}</div>
            <div>{street}</div>
            <div>{suite}</div>
            <div>{zipcode}</div>
            <div>get: {lat}</div>
            <div>{lng}</div>
            <div>{bs}</div>
            <div>{catchPhrase}</div>
            <hr/>
        </div>
    );
};

export default UserComponent;