import styled from 'styled-components';

export const StyledRefreshButton = styled.button`
position: absolute;
float: left;
top: 3vh;
right: 1.5vw;
background-color: rgba(0, 161, 255, .25);
border: none;
height: 26px;
width: 26px;
border-radius: 8px;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
transition-duration: .15s;

&:hover {
    background-color: rgba(0, 161, 255, .4);
    transform: scale(1.1);
}
`