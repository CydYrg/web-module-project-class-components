// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";

import Todo from "./Todo";

const ToDoList = props => {
  const handleClick = () => {
     
  }

   return (
       <div className="todo-list">
           {props.todo.map(todo => (
               <Todo todo={todo} />
           ))}
           <button onClick={handleClick} className="clear=btn">
               Clear Completed
           </button>
       </div>
   );
};

export default ToDoList;