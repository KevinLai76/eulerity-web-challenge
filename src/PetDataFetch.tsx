import React, { useState, useEffect } from 'react';

export type PetData = {
    title: string;
    description: string;
    url: string;
    created: string;
}

const PetDataFetch = () => {

    const [petData, setPetData] = useState<PetData[]>([])

    useEffect(() => {
        fetch("https://eulerity-hackathon.appspot.com/pets")
        .then(response => response.json())
        .then(data => {setPetData(data)})
    },[])

    return petData
}

export default PetDataFetch