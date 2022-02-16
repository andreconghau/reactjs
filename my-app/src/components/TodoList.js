import React from "react";
import Todo from "./Todo";


function TodoList() {
    return (
        <div className={"todo-list-item"}>
            <Todo />
            <Todo />
            <Todo />
        </div>
    )
}

export default TodoList;