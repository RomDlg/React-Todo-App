import styled from 'styled-components'
import { StyledTask } from '../tasks/Task';

export const StyledPanel = styled.div`
    background-color: ${(props) => props.backgroundColor};
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    flex: ${(props) => props.flex};
    text-align: center;
    align-content: center;
    border-radius: 4px;
    margin: .50rem .30rem;
`;



