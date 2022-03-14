import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '../../styles/StyledIcon';

export const StyledDeleteButton = styled.button`
background-color: rgba(255, 255, 255, .25);
align-self: center;
border: none;
margin: 0 .25rem;
height: 1.6rem;
width: 1.6rem;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
transition-duration: .15s;

&:hover {
    background-color: rgba(255, 255, 255, .4);
    transform: scale(1.1);
}
`