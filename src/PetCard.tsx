import React, { useState } from "react";
import './PetCard.css'

interface petDataObject {
    title: string;
    description: string;
    url: string;
    created: string;
}

interface Props {
    petDataProp: petDataObject;
}

const PetCard = (data: Props) => {
    const {petDataProp} = data
    
    return (
        <div className="petCard">
            <img className="petImage" src={petDataProp.url}/>
            <p className="petName">Title: {petDataProp.title}</p>
            <p className="petDescription">Description: {petDataProp.description}</p>
        </div>
    );
};

export default PetCard;
