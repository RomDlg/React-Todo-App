import styled from 'styled-components'
import { StyledTask } from '../tasks/Task';

export const StyledPanel = styled.div`
    background-color: ${(props) => props.backgroundColor};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    flex: ${(props) => props.flex};
    text-align: center;
    align-content: center;
    border-radius: 8px;
    margin: .2em .2em;
`;



