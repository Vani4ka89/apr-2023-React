import React from 'react';

const Cat = ({cat, dispatch}) => {
    const {name} = cat
    return (
        <div>
            <div>{name}</div>
            <button onClick={() => dispatch({type: 'DEL_CAT', payload: cat.id})}>delete</button>
            <hr/>
        </div>
    );
};

export default Cat;