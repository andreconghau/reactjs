import React from "react";
import Button from '@atlaskit/button';
import styled from "styled-components";

const ButtonStyled = styled(Button)`
text-align:left;
color:red !important;
margin-top:5px;
`;

function Todo() {
    return <ButtonStyled shouldFitContainer>Item 1</ButtonStyled>;
}

export default Todo;