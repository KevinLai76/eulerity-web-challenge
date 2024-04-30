import React, { useState } from "react";

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
        <div>
            <img src={petDataProp.url}/>
            <p>Title: {petDataProp.title}</p>
            <p>Description: {petDataProp.description}</p>
        </div>
    );
};

export default PetCard;
