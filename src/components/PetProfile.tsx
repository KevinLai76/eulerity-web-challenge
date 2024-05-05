import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { PetDataContext } from "../App";
import { PetData } from "../PetDataFetch";
import { downloadImage } from '../Download';


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
        <div>
            {pet && (
                <>
                    <img src={pet.url} alt={pet.title} />
                    <p>name: {pet.title}</p>
                    <p>description: {pet.description}</p>
                    <button onClick={handleDownload}>download</button>
                </>
            )}
        </div>
    )
}

export default PetProfile