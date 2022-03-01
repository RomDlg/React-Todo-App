import React from 'react';
import { StyledPanel } from '../styles/StyledPanel';
import { StyledTitle } from '../styles/TitleStyled';

const DetailsPanel = () => {
    return(
        <StyledPanel backgroundColor="#E7E7E7" flex="1">
            <StyledTitle color="black">Details panel</StyledTitle>
        </StyledPanel>
    )
}

export default DetailsPanel;