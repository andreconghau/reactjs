import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import React, {useCallback, useEffect, useState} from "react";
import {v4} from 'uuid';
import AddIcon from '@atlaskit/icon/glyph/add'

function App() {
    const [todoList, setTodoList] = useState([]);
    const [textInput, setTextInput] = useState("");
    const TODO_APP_STORAGE = 'TODO_APP';

    // Use react Hook use Effect

    useEffect(() => {
        const localTodoList = localStorage.getItem(TODO_APP_STORAGE);
        if (localTodoList) {
            setTodoList(JSON.parse(localTodoList));
        }
    }, []); // componentDidMount

    useEffect(() => {
    localStorage.setItem(TODO_APP_STORAGE, JSON.stringify(todoList));
    }, [todoList]); // luc nay khi todoList thay doi thi sẽ run method nay



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
        if (textInput) {
            setTodoList([{id: v4(), name: textInput, isCompleted: false}, ...todoList]);
            setTextInput("");
        }
    }, [textInput, todoList]);


    const onCheckButtonClick = useCallback((id) => {
        console.log(id);
        setTodoList((prevState) =>
            prevState.map(
                (todo) => todo.id === id ? {...todo, isCompleted: true} : todo
            )
        );
    }, []);

    const handleKeyPress = function (e) {
        if (e.key === 'Enter') {
            onAddBtnClick(e);
        }
    }

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
                            iconAfter={<span className={"add-icon"}><AddIcon primaryColor={"white"}/></span>}
                        >
                            Add new item
                        </Button>
                    }
                    css={{padding: "2px 4px 2px"}}
                    value={textInput}
                    onChange={onTextInputChange}
                    onKeyUp={handleKeyPress}
                />
                <TodoList todoList={todoList} onCheckButtonClick={onCheckButtonClick}/>
            </div>

        </>
    );
}

export default App;
