import TodoList from "./components/TodoList";
import Textfield from '@atlaskit/textfield';
import Button from '@atlaskit/button';
import React from "react";

function App() {
    return (
        <>
            <p>Todo list</p>
            <div className={"todo-list-wrapper"}>
                <Textfield
                    name={"basic"} aria-label={"default text field"} placeholder={"add them"}
                    elemAfterInput={
                        <Button
                            appearance="primary" isDisabled={true}>
                            Add new item
                        </Button>
                    }
                    css={{padding: "2px 4px 2px"}}/>
                <TodoList/>
            </div>

        </>
    );
}

export default App;
