import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PetDataContext } from "../App";
import { PetData } from "../PetDataFetch";

const PetProfile = () => {
    const { name } = useParams()
    const petData: PetData[] = useContext(PetDataContext);
    const pet = petData.find((pet) => pet.title === name)

    return(
        <div>
            {pet && (
                <>
                    <img src={pet.url} alt={pet.title} />
                    <p>name: {pet.title}</p>
                    <p>description: {pet.description}</p>
                </>
            )}
        </div>
    )
}

export default PetProfile