import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledAddButton } from '../buttons/AddButton';
import { StyledInput } from '../styles/StyledInput';
import { StyledPanel } from '../styles/StyledPanel';
import { StyledTitle } from '../styles/StyledTitle';
import { StyledValidateButton } from '../buttons/subButtons/ValidateButton';
import { StyledCancelButton } from '../buttons/subButtons/CancelButton';
import ValidateIcon from '../../icons/ValidateIcon';
import CancelIcon from '../../icons/CancelIcon';
import Task from '../tasks/Task';
import { createTask } from '../../features/TaskSlice';
import { postTask } from '../../actions/tasks';

const DetailsPanel = () => {

    const tasks = useSelector((state) => state.task.value)
    const currentProject = useSelector((state) => state.selected.value)

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [toggled, setToggled] = useState(false)
    

    const getTasks = () => {
        const validTasks = []
        if (tasks.length > 0) {
            tasks.map((task) => {
                if (task.projectId === currentProject) {
                    validTasks.push(task)
                }
            })
        }
        return validTasks
    }

    const validTask = getTasks()

    return(
        <StyledPanel backgroundColor="#E7E7E7" flex="1">
            <StyledTitle color="black">Details panel</StyledTitle>
            {currentProject === null ? <h3 style={{margin: 0, textAlign: 'center', color: 'rgba(0,0,0, .6)'}}>Select a project.</h3> : validTask.map((task) => <Task key={task.id} id={task.id} title={task.title} description={task.description} projectId={task.projectId} done={task.done} color="red"/>)}
            {toggled ?
            <div>
                <StyledInput onKeyPress={(event) => event.key === 'Enter' && postTask(title, description, currentProject)} onChange={(event) => setTitle(event.target.value)} placeholder="Task title" maxLength={24} />
                <StyledInput onKeyPress={(event) => event.key === 'Enter' && postTask(title, description, currentProject)} onChange={(event) => setDescription(event.target.value)} placeholder="Task description" maxLength={64}/>
                <StyledValidateButton type='submit'onKeyPress={(event) => event.key === 'Enter' && postTask(title, description, currentProject)} onClick={() => {
                    postTask(title, description, currentProject);
                    setToggled(false);}}>
                    <ValidateIcon />
                    </StyledValidateButton>
                <StyledCancelButton onClick={() => setToggled(false)}>
                    <CancelIcon />
                    </StyledCancelButton>
            </div>:
            currentProject &&
            <div>
                <StyledAddButton onClick={() => {
                if (toggled) {
                    setToggled(false)
                } else {
                    setTitle("No title");
                    setDescription("");
                    setToggled(true)    
                }
            }}
            >+</StyledAddButton>
            </div>
            }
        </StyledPanel>
    )
}

export default DetailsPanel;