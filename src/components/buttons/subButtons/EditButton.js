import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '../../styles/StyledIcon';

const StyledEditButton = styled.button`
background-color: rgba(255, 255, 255, .25);
border: none;
margin: 0.5rem;
height: 30px;
width: 30px;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
transition-duration: .15s;


&:hover {
    background-color: rgba(255, 255, 255, .4);
    transform: scale(1.1);
`

function EditProjectButton() {
    return ( 
        <StyledEditButton>
            <StyledIcon src={require('../../../img/edit.png')} />
        </StyledEditButton>
     );
}

export default EditProjectButton
;