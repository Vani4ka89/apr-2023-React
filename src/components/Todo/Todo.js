import React from 'react';

const Todo = ({todo}) => {
    const {id, title, completed} = todo
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
            <hr/>
        </div>
    );
};

export default Todo;