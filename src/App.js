import './App.css';
import DetailsPanel from './components/panels/DetailsPanel';
import ProjectPanel from './components/panels/ProjectPanel';
import styled from 'styled-components';
import { useEffect } from 'react';
import { store } from './app/store';
import { initProjects } from './features/ProjectSlice';
import axios from 'axios';
import { getProjects } from './actions/project';
import { getTasks } from './actions/tasks';
import { StyledRefreshButton } from './components/buttons/RefreshButton';
import RefreshIcon from './icons/RefreshIcon';
const AppContainer = styled.div`

    display: flex;
    flex-flow: row wrap;
    background-color: rgba(0, 0, 0, .25);
    position: absolute;
    width: 100%;
    height: 100%;
    transition-duration: .15s;
`;

function App() {

  useEffect(() => {
    getProjects()
    getTasks()
  })

  return (
    <AppContainer>
      <div>
        <StyledRefreshButton onClick={() => window.location.reload()}>
          <RefreshIcon />
        </StyledRefreshButton>
      </div>
      <div className='draggable' style={{width: '100%', height: '3em', position:'absolute'}}></div>
      <ProjectPanel />
      <DetailsPanel />
    </AppContainer>
  );
}

export default App;
