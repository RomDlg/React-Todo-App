import React, { useEffect } from 'react';
import { StyledPanel } from '../styles/StyledPanel';
import { StyledTitle } from '../styles/TitleStyled';
import AddProjectButton from '../buttons/AddProjectButton';
import { useSelector } from 'react-redux';
import Project from '../projects/Project';

const ProjectPanel = () => {

    const projects = useSelector((state) => state.project)
    console.log(projects)

    return(
        <StyledPanel backgroundColor="#004065" flex=".4">
            <StyledTitle color="white">Project Panel</StyledTitle>
            {projects && projects.value.map(project => <Project key={project.id} title={project.title} />)}
            <AddProjectButton />
        </StyledPanel>
    )
}  

export default ProjectPanel