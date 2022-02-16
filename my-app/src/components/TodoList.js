import React from "react";
import Todo from "./Todo";


function TodoList({todoList}) {
    return (
        <div className={"todo-list-item"}>
            {
                todoList.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    )
}

export default TodoList;