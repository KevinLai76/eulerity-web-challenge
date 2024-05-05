import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { PetData } from "../PetDataFetch";

const StyledDiv = styled.div`
    width: calc(33.33% - 10px);
    margin-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10%;
    
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`

const StyledCheckBox = styled.input`
    position: absolute;
    top: 0;
    right: 0;
`

const StyledImg = styled.img`
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
`

type PetCardProps = {
    petDataProp: PetData;
    handleSelect: (pet:PetData) => void;
    isSelected: boolean
}

const PetCard = ({ petDataProp, handleSelect, isSelected }: PetCardProps) => {    
    const { title, description, url } = petDataProp

    return (
        <StyledDiv className="petCard">
            <Link to={`/pet/${title}`}>
                <StyledImg className="petImage" src={url}/>
                <p className="petName">{title}</p>
                <p className="petDescription">{description}</p>
            </Link>
            <input type="checkbox" checked={isSelected} onChange={() => handleSelect(petDataProp)}/>
        </StyledDiv>
    );
};

export default PetCard;