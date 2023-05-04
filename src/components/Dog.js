import React from 'react';

const Dog = ({dog, dispatch}) => {
    const {name} = dog
    return (
        <div>
            <div>{name}</div>
            <button onClick={() => dispatch({type: 'DEL_DOG', payload: dog.id})}>delete</button>
            <hr/>
        </div>
    );
};

export default Dog;