import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import React, {useCallback, useState} from "react";
import {v4} from 'uuid';

function App() {
    const [todoList, setTodoList] = useState([]);
    const [textInput, setTextInput] = useState("");

    // Todo cái này sẽ bắc render lại component khi run
    /*
    const onTextInputChange = function (e) {
        setTextInput(e.target.value);
    }
     */
    // dung hook nay se ko render lai, ko call shouldUpdateComponents()
    const onTextInputChange = useCallback((e) => {
        setTextInput(e.target.value);
    }, []);

    // Todo cái này sẽ bắc render lại component khi run
    /*
        const onAddBtnClick = (e) => {
        // them item vao todoList
        // setTodoList([{name: "Item 1"}]); // se override list

        setTodoList([...todoList, {id: v4(), name: textInput, isCompleted: false}]); // append list
    }
     */

    const onAddBtnClick = useCallback((e) => {
        setTodoList([{id: v4(), name: textInput, isCompleted: false}, ...todoList]);
        setTextInput("");
    }, [textInput, todoList]);


    return (
        <>
            <p>Todo list</p>
            <div className={"todo-list-wrapper"}>
                <Textfield
                    name={"basic"} aria-label={"default text field"} placeholder={"add more item..."}
                    elemAfterInput={
                        <Button
                            appearance="primary" isDisabled={!textInput}
                            onClick={onAddBtnClick}
                        >
                            Add new item
                        </Button>
                    }
                    css={{padding: "2px 4px 2px"}}
                    value={textInput}
                    onChange={onTextInputChange}
                />
                <TodoList todoList={todoList}/>
            </div>

        </>
    );
}

export default App;
