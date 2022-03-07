import styled from "styled-components"

export const StyledInput = styled.input`
    border-radius: 4px;
    display: inline-block;
    background-color: rgba(255, 255, 255, .25);
    border: none;
    margin: 0.5rem;
    height: 1.9rem;
    width: 12rem;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition-duration: .2s;

    &:hover {
        background-color: rgba(255, 255, 255, .4);
        transform: scale(1.025);
    }
    
    &:focus {
        background-color: rgba(255, 255, 255, .4);
        transform: scale(1.025);
        

`