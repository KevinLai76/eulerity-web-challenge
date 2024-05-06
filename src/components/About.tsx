import React, { useContext } from "react";
import { PetDataContext } from "../App";
import { PetData } from "../PetDataFetch";
import styled from "styled-components";
import {StyledContainer, StyledCard, StyledImage } from "./PetProfileStyles";
import { StyledName, StyledDescription } from "../GeneralStyles";

const StyledText = styled.span`
    text-decoration: line-through;
`

const About = () => {
    const petData: PetData[] = useContext(PetDataContext);
    const pet = petData.find((pet) => pet.title === 'Moose')
    
    return(
        <StyledContainer>
            <StyledCard>
                <StyledImage src={pet?.url}/>
                <StyledName><StyledText>Moose</StyledText> Kevin</StyledName>
                <StyledDescription className= "bio-content-text-message-1">
                    My name is Kevin, a web developer with a love for minimalist design. 
                    With a focus on functionality and simplicity, I try to blend aesthetics and usability on every project. 
                    Whether it’s building intuitive interfaces, optimizing performance, or any creative/technical project I’m always up for the challenge.    
                </StyledDescription> 
                <StyledDescription className= "bio-content-message-2">
                    When I’m not on the computer you can find me outside shooting film photography or playing wiffleball.
                    Looking forward to the opportunity of working together, let's build something beautiful.    
                </StyledDescription>
            </StyledCard>
        </StyledContainer>
    )
}

export default About