import React from "react";
import Todo from "./Todo";


function TodoList({todoList, onCheckButtonClick}) {
    return (
        <div className={"todo-list-item"}>
            {
                todoList.map((todo) => (
                    <Todo key={todo.id} todo={todo} onCheckButtonClick={onCheckButtonClick}/>
                ))

            }
        </div>
    )
}

export default TodoList;