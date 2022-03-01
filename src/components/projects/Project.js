import React from 'react';
import styled from 'styled-components';
import DeleteProjectButton from '../buttons/subButtons/DeleteButton';
import EditProjectButton from '../buttons/subButtons/EditButton';

const StyledProject = styled.div`
    display: flex;
    flex-flow: row wrap;
    background-color: rgba(255, 255, 255, .25);
    margin: .5rem;
    padding: 0 .25rem;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition-duration: .2s;

    &:hover {
        background-color: rgba(255, 255, 255, .5);
        transform: scale(1.02);
    }
`

const StyledProjectTitle = styled.h2`
    margin: 0;
    padding: 0.5rem;
`

function Project(props) {

    console.log(props.title)
    return ( 
        <StyledProject>
            <StyledProjectTitle>{props.title}</StyledProjectTitle>
            <EditProjectButton />
            <DeleteProjectButton />
        </StyledProject>
     );
}

export default Project;