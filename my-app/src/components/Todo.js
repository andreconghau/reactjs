import React from "react";
import Button from '@atlaskit/button';
import styled, {css} from "styled-components";
import CheckIcon from '@atlaskit/icon/glyph/check'

const ButtonStyled = styled(Button)`
text-align:left;
margin-top:5px;

&,
&:hover {
    ${(p) => p.iscompleted && css`
        text-decoration: line-through;
    
    `}
}

&:hover{
    color:red !important;
    .check-icon{
        display: inline-block;
    }
}

.check-icon{
    display:none;
    &:hover{
        background-color: #e2e2e2;
        border-radius: 3px;
    }
}
`;


function Todo({todo, onCheckButtonClick}) {
    console.log(todo.isCompleted);
    return (
        <ButtonStyled
            iscompleted={todo.isCompleted.toString()}
            shouldFitContainer
            iconAfter={!todo.isCompleted && (
                        <span className={"check-icon"} onClick={() => onCheckButtonClick(todo.id)}>
                             <CheckIcon primaryColor={"green"}/>
                         </span>
                        )
            }
        >
            {todo.name}
        </ButtonStyled>
    );
}

export default Todo;