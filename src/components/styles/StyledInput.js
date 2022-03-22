import styled from "styled-components"

export const StyledInput = styled.input`
    border-radius: 4px;
    display: inline-block;
    background-color: rgba(255, 255, 255, .25);
    border: none;
    margin: .4em .4em 0 .4em;
    height: 1.9rem;
    width: 12rem;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition-duration: .2s;

    &:hover {
        background-color: rgba(255, 255, 255, .4);
        transform: scale(1.05);
    }
    
    &:focus {
        background-color: rgba(255, 255, 255, .4);
        transform: scale(1.05);
`