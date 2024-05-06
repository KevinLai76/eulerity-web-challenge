import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { PetData } from "../PetDataFetch";
import { StyledDiv, StyledCheckBox, StyledImg, StyledLink } from "./PetCardStyles"
import { StyledName, StyledDescription } from "../GeneralStyles"

type PetCardProps = {
    petDataProp: PetData;
    handleSelect: (pet:PetData) => void;
    isSelected: boolean
}

const PetCard = ({ petDataProp, handleSelect, isSelected }: PetCardProps) => {    
    const { title, description, url } = petDataProp

    return (
        <StyledDiv className="petCard">
            <StyledLink to={`/pet/${title}`}>
                <StyledImg className="petImage" src={url}/>
                <StyledName className="petName">{title}</StyledName>
                <StyledDescription className="petDescription">{description}</StyledDescription>
            </StyledLink>
            <StyledCheckBox type="checkbox" checked={isSelected} onChange={() => handleSelect(petDataProp)}/>
        </StyledDiv>
    );
};

export default PetCard;