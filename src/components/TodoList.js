// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import { tsAnyKeyword } from "@babel/types";
import React from "react";

import Item from "./Item";

const ToDoList = props => {
  const handleClick = () => {
      props.clearCompleted();
  }

   return (
       <div className="todo-list">
           {props.todo.map(item => (
               <Todo toggleTodo={props.toggleTodo} key={task.id} todo={todo} />
           ))}
           <button onClick={handleClick} className="clear=btn">
               Clear Completed
           </button>
       </div>
   );
};

export default ToDoList;