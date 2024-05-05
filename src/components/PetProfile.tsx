import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PetDataContext } from "../App";
import { PetData } from "../PetDataFetch";
import { downloadImage } from '../Download';
import {StyledContainer, StyledCard, StyledImage } from "./PetProfileStyles";
import { StyledName, StyledDescription, StyledButtonDownload } from "./GeneralStyles"

const PetProfile = () => {
    const { name } = useParams()
    const petData: PetData[] = useContext(PetDataContext);
    const pet = petData.find((pet) => pet.title === name)

    const handleDownload = () => {
        if(pet){
            downloadImage(pet.url)
        }
    }

    return(
        <StyledContainer>
            {pet && (
                <StyledCard>
                    <StyledImage src={pet.url} alt={pet.title} />
                    <StyledName>{pet.title}</StyledName>
                    <StyledDescription>{pet.description}</StyledDescription>
                    <StyledButtonDownload onClick={handleDownload}>download</StyledButtonDownload>
                </StyledCard >
            )}
        </StyledContainer>
    )
}

export default PetProfile