import { produceWithPatches } from 'immer';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteProject, editProject, getProjects } from '../../actions/project';
import { select, selectedSlice } from '../../features/SelectedSlice';
import EditIcon from '../../icons/EditIcon';
import TrashIcon from '../../icons/TrashIcon';
import ValidateIcon from '../../icons/ValidateIcon';
import { StyledDeleteButton } from '../buttons/subButtons/DeleteButton';
import { StyledEditButton } from '../buttons/subButtons/EditButton';
import { StyledValidateButton } from '../buttons/subButtons/ValidateButton';
import { StyledEditableField } from '../styles/EditableField';

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

    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [currentTitle, setNewTitle] = useState(props.title)

    return ( 
        <StyledProject onClick={() => dispatch(select(props.id))}>
            <StyledProjectTitle>{props.title}</StyledProjectTitle>
            <StyledEditButton onClick={() => {
                if (editable) {
                    setEditable(false);
                    console.log("Not editable");
                } else {
                    setEditable(true);
                    console.log("Editable");
                }
            }}>
                <EditIcon />
            </StyledEditButton>
            <StyledDeleteButton onClick={() => deleteProject(props.id)}>
                <TrashIcon style />
            </StyledDeleteButton>
            {editable && <div>
                <StyledEditableField placeholder={props.title} onChange={(event) => setNewTitle(event.target.value)} onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                        editProject(props.id, currentTitle);
                        setEditable(false);
                    }
                }}
                />
                <StyledValidateButton onClick={() => {
                    editProject(props.id, currentTitle);
                    setEditable(false);
                }}>
                    <ValidateIcon />
                </StyledValidateButton>
            </div>}
        </StyledProject>
     );
}

export default Project; 