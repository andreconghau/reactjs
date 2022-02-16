import React from "react";
import Todo from "./Todo";


function TodoList({todoList}) {
    return (
        <div className={"todo-list-item"}>
            {
                todoList.map(todo => <Todo key={todo.name} todo={todo}/>)
            }
        </div>
    )
}

export default TodoList;