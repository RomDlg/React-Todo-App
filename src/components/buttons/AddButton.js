import styled from 'styled-components';

export const StyledAddButton = styled.button`
background-color: rgba(255, 255, 255, .25);
border: none;
margin: 0.5rem;
height: 25px;
width: 25px;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
transition-duration: .15s;

&:hover {
    background-color: rgba(255, 255, 255, .4);
    transform: scale(1.1);
}
`