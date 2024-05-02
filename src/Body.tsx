import React, { useContext, useState } from 'react';
import { PetDataContext } from './App';
import PetCard from './PetCard';

export type PetData = {
    title: string;
    description: string;
    url: string;
    created: string;
}

const Body = () => {
    const petData: PetData[] = useContext(PetDataContext);
    const [searchInput, setSearchInput] = useState<string>('')
    const [sortType, setSortType] = useState<string>('')
    const [selectedPets, setSelectedPets] = useState<PetData[]>([])
    
    // control function for search bar
    const handleChange = (e:any) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }
    const isPetSelected = (e:PetData) =>{
        return selectedPets.find((selectedPet) => selectedPet.title === e.title)
    }
    const handleSelect = (e:PetData) => {

        if(!isPetSelected(e)){
            setSelectedPets([...selectedPets, e])
            console.log('added: ', selectedPets)
        } else {
            const filteredSelectedPets = selectedPets.filter((selectedPet) => selectedPet.title !== e.title)
            setSelectedPets(filteredSelectedPets)
            console.log('removed: ', selectedPets)
        }
    }

    const handleSelectAll = () =>{
        setSelectedPets([...petData])
    }

    const handleClearAll = () => {
        setSelectedPets([])
    }

    const filteredPetData = petData.filter((pet) => {
        if(searchInput === ''){
            return pet
        } else if (
            pet.title.toLowerCase().includes(searchInput.toLowerCase()) ||
            pet.description.toLowerCase().includes(searchInput.toLowerCase())
        ){
            return pet
        }
    })

    const handleSort = (e:any) => {
        e.preventDefault()
        setSortType(e.target.value)
    }
    
    const sortedPetData = [...filteredPetData]
    if(sortType === 'asc'){
        sortedPetData.sort((a,b) => a.title.localeCompare(b.title))
    } else if(sortType === 'desc'){
        sortedPetData.sort((a,b) => b.title.localeCompare(a.title))
    } 

    const card = sortedPetData.map((pet:PetData, i) => <PetCard key={i} petDataProp={pet} handleSelect={handleSelect}/>);
    
    return (                
        <div className="body">
            <div className="bodyContentFilters">
                <button onClick={handleSelectAll}>Select All</button>
                <button onClick={handleClearAll}>Clear All Selection</button>
                <input type="text" placeholder="Search Here" onChange={handleChange} value={searchInput}/>
                <select defaultValue={''} onChange={handleSort}>
                    <option value="">Best Match</option>
                    <option value="asc">Name A-Z</option>
                    <option value="desc">Name Z-A</option>
                </select>
            </div>
            <div className="petCardContainer">
                {card}
            </div>
        </div>
    );
};

export default Body;