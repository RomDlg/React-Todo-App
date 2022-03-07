import React, { useState } from 'react';
import { StyledPanel } from '../styles/StyledPanel';
import { StyledTitle } from '../styles/StyledTitle';
import { StyledInput } from '../styles/StyledInput';
import { useDispatch, useSelector } from 'react-redux';
import Project from '../projects/Project';
import { StyledValidateButton } from '../buttons/subButtons/ValidateButton';
import { StyledCancelButton } from '../buttons/subButtons/CancelButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledAddProjectButton } from '../buttons/AddProjectButton';
import { StyledIcon } from '../styles/StyledIcon';
import ValidateIcon from '../../icons/ValidateIcon';
import CancelIcon from '../../icons/CancelIcon';
import { createProject } from '../../features/ProjectSlice';
import { getProjects, postProject } from '../../actions/project';

const ProjectPanel = () => {

    const dispatch = useDispatch()

    //Get projects list
    const projects = useSelector((state) => state.project)
    //If in creating project or not
    const [toggled, setToggled] = useState(false)
    //To catch the new project name
    const [projectName, setProjectName] = useState('')

    const createProject = () => {
        setToggled(false);
        postProject(projectName)
        getProjects()
    }

    return(
        <StyledPanel backgroundColor="#004065" flex=".4">
            <StyledTitle color="white">Project Panel</StyledTitle>
            {projects && projects.value.map(project => <Project key={project.id} title={project.title} />)}
            {toggled ? <div style={{display: 'block'}}>
                <StyledInput onSubmit={createProject} onChange={(event) => setProjectName(event.target.value)} placeholder='New Project'/> 
                <StyledValidateButton type='submit' onClick={createProject}>
                    <ValidateIcon />
                    </StyledValidateButton>
                <StyledCancelButton onClick={() => setToggled(false)}>
                    <CancelIcon />
                    </StyledCancelButton>
            </div> :
             <StyledAddProjectButton onClick={() => {
                if (toggled) {
                    setToggled(false)
                } else {
                    setToggled(true)
                }
            }}>
                +</StyledAddProjectButton>}
        </StyledPanel>
    )
}
export default ProjectPanel;