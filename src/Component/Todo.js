import React from "react";
import TodoItem from "./TodoItem";
function Todo({ todo }) {
    return (
        <div className="Todo-block2">
           {todo.map((i,index)=>{
               return <TodoItem key = {index} {...i}/>
           })}
        </div>
    )
}

export default Todo;