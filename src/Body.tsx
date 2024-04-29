import React,{ useContext } from 'react'
import { PetDataContext } from './App'

const Body = () => {

    const petData = useContext(PetDataContext)
    console.log(petData)
    return(
        <div>
            this is the body
        </div>
    )
}

export default Body