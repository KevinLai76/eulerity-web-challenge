import React, { useState } from "react";
import './PetCard.css'
import { PetData } from "./Body";

type PetCardProps = {
    petDataProp: PetData;
    handleSelect: (pet:PetData) => void
}

const PetCard = ({ petDataProp, handleSelect }: PetCardProps) => {    
    const { title, description, url } = petDataProp

    return (
        <div className="petCard">
            <img className="petImage" src={url}/>
            <p className="petName">Name: {title}</p>
            <p className="petDescription">Description: {description}</p>
            <input type="checkbox" onChange={() => handleSelect(petDataProp)}/>
        </div>
    );
};

export default PetCard;
