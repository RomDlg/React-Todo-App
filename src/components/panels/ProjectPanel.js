import React, { useState } from 'react';
import { StyledPanel } from '../styles/StyledPanel';
import { StyledTitle } from '../styles/StyledTitle';
import { StyledInput } from '../styles/StyledInput';
import { useDispatch, useSelector } from 'react-redux';
import Project from '../projects/Project';
import { StyledValidateButton } from '../buttons/subButtons/ValidateButton';
import { StyledCancelButton } from '../buttons/subButtons/CancelButton';
import ValidateIcon from '../../icons/ValidateIcon';
import CancelIcon from '../../icons/CancelIcon';
import { getProjects, postProject } from '../../actions/project';
import { StyledAddButton } from '../buttons/AddButton';
import { StyledRefreshButton } from '../buttons/RefreshButton';
import RefreshIcon from '../../icons/RefreshIcon';

const ProjectPanel = () => {

    const dispatch = useDispatch()

    //Get projects list
    const projects = useSelector((state) => state.project.value)
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
        <StyledPanel backgroundColor="#004065" flex=".3">
            <StyledTitle color="white">Project Panel</StyledTitle>
            {projects.length == 0 ? <h3 style={{margin: 0, textAlign: 'center', color: 'rgba(0,0,0, .6)'}}>You don't have any project.</h3> : projects.map(project => <Project key={project.id} title={project.title} id={project.id} />)}
            {toggled ? <div>
                <StyledInput onKeyPress={(event) => event.key === 'Enter' && createProject()} onChange={(event) => setProjectName(event.target.value)} placeholder='New Project' maxLength={24}/> 
                <StyledValidateButton type='submit' onClick={() => createProject()}>
                    <ValidateIcon />
                    </StyledValidateButton>
                <StyledCancelButton onClick={() => setToggled(false)}>
                    <CancelIcon />
                    </StyledCancelButton>
            </div> :
             <StyledAddButton onClick={() => {
                if (toggled) {
                    setToggled(false)
                } else {
                    setProjectName("No name")
                    setToggled(true)
                }
            }}>
                +</StyledAddButton>}
        </StyledPanel>
    )
}
export default ProjectPanel;