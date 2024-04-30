import React, { useState, useEffect } from 'react'

const PetDataFetch = () => {

    const [petData, setPetData] = useState([])

    useEffect(() => {
        fetch("https://eulerity-hackathon.appspot.com/pets")
        .then(response => response.json())
        .then(data => {setPetData(data)})
    },[])

    return petData
}

export default PetDataFetch