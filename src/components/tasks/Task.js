import React, { useState } from 'react';
import  { useSelector } from 'react-redux'
import styled from 'styled-components';
import { StyledCheckedBox } from '../styles/CheckBox/StyledCheckedBox';
import { StyledUncheckedBox } from '../styles/CheckBox/StyledUncheckedBox';
import ValidateIcon from '../../icons/ValidateIcon'
import CancelIcon from '../../icons/CancelIcon';
import TrashIcon from '../../icons/TrashIcon';
import { deleteTask, editTask, setDone, setToDo } from '../../actions/tasks';

import { StyledDeleteButton } from '../buttons/subButtons/DeleteButton';
import { StyledEditButton } from '../buttons/subButtons/EditButton';
import { StyledValidateButton } from '../buttons/subButtons/ValidateButton';
import { StyledEditableField } from '../styles/EditableField';
import EditIcon from '../../icons/EditIcon';

export const StyledTask = styled.div`
    display: flex;
    flex-flow: row wrap;   
    background-color: ${props => props.color};
    margin: .5em 4em;
    padding: .1em .25rem;
    border-radius: 4px;

    border: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    transition-duration: .2s;

    &:hover {
        background-color: ${props => props.hoverColor};
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        transform: scale(1.02);
    }
`

const StyledTaskTitle = styled.h3`
    flex: 1; 
    display: inline;
    text-align: left;
    margin: .5em 0 0 .25em;
`

const StyledTaskDescription = styled.p`
    flex: 1 1 100%;
    text-align: left;    
    margin: .25em;
`

const Task = (props) => {
    const task = useSelector((state) => state.task.value)
    const [editable, setEditable] = useState("")
    const [checked, setChecked] = useState(props.done)
    const [currentTitle, setNewTitle] = useState(props.title)
    const [currentDescription, setNewDescription] = useState(props.description)


    return ( 
        <StyledTask color={props.done ? "rgba(149, 255, 123, 0.25)" : "rgba(255, 255, 255, 0.25)"} hoverColor={props.done ? "rgba(149, 255, 123, 0.5)" : "rgba(255, 255, 255, 0.5)"}>
            {props.done ?
                <StyledCheckedBox onClick={() => setToDo(props.id, props.title, props.description, props.projectId)}>
                    <CancelIcon/>
                </StyledCheckedBox>:
                <StyledUncheckedBox onClick={() => setDone(props.id, props.title, props.description, props.projectId)}>
                    <ValidateIcon/>
                </StyledUncheckedBox>
            }
            <StyledTaskTitle>{props.title}</StyledTaskTitle>
            <StyledEditButton onClick={() => {
                if (editable) {
                    setEditable(false);
                } else {
                    setEditable(true);
                }
            }}>
                <EditIcon />
            </StyledEditButton>
            <StyledDeleteButton onClick={() => deleteTask(props.id)}>
                <TrashIcon/>
            </StyledDeleteButton>
            {editable && <div>
                <StyledEditableField placeholder={props.title} onKeyPress={(event) => {event.key === 'Enter' && editTask(props.id, currentTitle, currentDescription, props.projectId, props.done); event.key === 'Enter' && setEditable(false)}} onChange={(event) => setNewTitle(event.target.value)}/>
                <StyledEditableField placeholder={props.description} onKeyPress={(event) => {event.key === 'Enter' && editTask(props.id, currentTitle, currentDescription, props.projectId, props.done); event.key === 'Enter' && setEditable(false)}} onChange={(event) => setNewDescription(event.target.value)}/>
                <StyledValidateButton onClick={() => {
                    editTask(props.id, currentTitle, currentDescription, props.projectId, props.done);
                    setEditable(false);
                }}>
                    <ValidateIcon />
                </StyledValidateButton>
            </div>}
                <StyledTaskDescription>{props.description}</StyledTaskDescription>
        </StyledTask>
     );
}

export default Task;