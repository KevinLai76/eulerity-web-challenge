import React, { useState, useEffect } from 'react'

const usePetContext = () => {

    const [petData, setPetData] = useState([])

    useEffect(() => {
        fetch("https://eulerity-hackathon.appspot.com/pets")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            setPetData(data)
        })
      },[])

    return {petData}
}

export default usePetContext