import './App.css';
import DetailsPanel from './components/panels/DetailsPanel';
import ProjectPanel from './components/panels/ProjectPanel';
import styled from 'styled-components';
import { useEffect } from 'react';
import { store } from './app/store';
import { initProjects } from './features/ProjectSlice';
import axios from 'axios';
const AppContainer = styled.div`

    display: flex;
    flex-flow: row wrap;
    background-color: #363636;
    position: absolute;
    width: 100%;
    height: 100%;
    transition-duration: .15s;
`;

function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/project')
    .then((res) => {store.dispatch(initProjects(res.data))})
  })

  return (
    <AppContainer>
      <ProjectPanel />
      <DetailsPanel />
    </AppContainer>
  );
}

export default App;
