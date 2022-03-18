import { useState } from "react";
import styled from "styled-components"
import { StyledInput } from "../styles/StyledInput";

const styledCreateTaskField = styled.div`
background-color: rgba(255, 255, 255, 0.3)
box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
text-align: center;
align-content: center;
border-radius: 4px;
margin: .50rem .30rem;
`;

export default CreateTask;