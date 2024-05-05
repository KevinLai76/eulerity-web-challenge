import React, { useContext, useState } from 'react';
import { PetDataContext } from '../App';
import PetCard from './PetCard';
import { PetData } from '../PetDataFetch';
import { downloadImage } from '../Download';
// import { PetDataContextType } from './App';

import { StyledBodyContainer, StyledFiltersContainer, StyledPetContainer } from './BodyStyles'

// export type PetData = {
//     title: string;
//     description: string;
//     url: string;
//     created: string;
// }

const Body = () => {
    const petData: PetData[] = useContext(PetDataContext);
    const [searchInput, setSearchInput] = useState<string>('')
    const [sortType, setSortType] = useState<string>('')
    const [selectedPets, setSelectedPets] = useState<PetData[]>([])
    
    // checks state for duplicate selected pet object, also serves as boolean value for checkbox
    const isPetSelected = (e:PetData) =>{
        return selectedPets.includes(e)
    }

    // updates selected pets state with target pet when checkbox is clicked 
    const handleSelect = (e:PetData) => {

        if(!isPetSelected(e)){
            setSelectedPets([...selectedPets, e])
        } else {
            const filteredSelectedPets = selectedPets.filter((selectedPet) => selectedPet.title !== e.title)
            setSelectedPets(filteredSelectedPets)
        }
    }

    // Select All button functionality, selects all pets currently displayed
    const handleSelectAll = () =>{
        const filteredSelectAllPets = sortedPetData.filter(pet => !selectedPets.includes(pet))

        setSelectedPets([...selectedPets, ...filteredSelectAllPets])
    }

    // Clear All button functionality, updates selected pets state with an empty array
    const handleClearAll = () => {
        setSelectedPets([])
    }
      
    // Download Selected button functionality
    const handleDownload = () => {
        if(selectedPets.length !== 0){
            selectedPets.forEach((pet) => {
                downloadImage(pet.url)
            })
        }
    }

    // function to control search bar, updates state with user input
    const handleChange = (e:any) => {
        e.preventDefault()
        setSearchInput(e.target.value)
    }

    // takes user input from search bar and filters pets names and description by input value
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

    // handle function for drop down, sets state with value attribute on drop down list item
    const handleSort = (e:any) => {
        e.preventDefault()
        setSortType(e.target.value)
    }
    
    // sorts pets from a-z or z-a depending on value of sortedPetData state
    const sortedPetData = [...filteredPetData]
    if(sortType === 'asc'){
        sortedPetData.sort((a,b) => a.title.localeCompare(b.title))
    } else if(sortType === 'desc'){
        sortedPetData.sort((a,b) => b.title.localeCompare(a.title))
    } 

    // pets are rendered after filters are applied respectively: search filter, sort a-z || z-a 
    const card = sortedPetData.map((pet:PetData, i) => <PetCard key={i} petDataProp={pet} handleSelect={handleSelect} isSelected={isPetSelected(pet)}/>);
    return (                
        <StyledBodyContainer className="body">
            <StyledFiltersContainer className="bodyContentFilters">
                <p>Checkout: {selectedPets.length}</p>
                <button onClick={handleSelectAll}>Select All</button>
                <button onClick={handleClearAll}>Clear All Selection</button>
                <button onClick={handleDownload}>Download Selected</button>
                <input type="text" placeholder="Search Here" onChange={handleChange} value={searchInput}/>
                <select defaultValue={''} onChange={handleSort}>
                    <option value="">Best Match</option>
                    <option value="asc">Name A-Z</option>
                    <option value="desc">Name Z-A</option>
                </select>
            </StyledFiltersContainer>
            <StyledPetContainer>
                {card}
            </StyledPetContainer>
        </StyledBodyContainer>
    );
};

export default Body;