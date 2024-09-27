import React, { useState } from 'react';

const Todo = props => {

    const  handleClick = () => {
        props.toggleTodo(props.task.id);
    }

    return (
        <div onClick={handleClick} className={`item${props.todo.completed ? ' completed' : ''}`}>
            <p>{props.task.id}</p>
        </div>
    );
};

export default Todo;