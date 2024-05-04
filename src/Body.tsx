import React, { useContext, useState } from 'react';
import { PetDataContext } from './App';
import styled from "styled-components";
import PetCard from './PetCard';
// import { PetDataContextType } from './App';

const StyledBodyContainer = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
`

const StyledFiltersContainer = styled.div`
    margin-bottom: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`

const StyledPetContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

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
        return selectedPets.includes(e)
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
        const filteredSelectAllPets = sortedPetData.filter(pet => !selectedPets.includes(pet))

        setSelectedPets([...selectedPets, ...filteredSelectAllPets])
    }

    const handleClearAll = () => {
        setSelectedPets([])
    }

    const downloadImage = (imageUrl:string) => {
        return fetch(imageUrl)
          .then((response) => response.blob())
          .then((blob) => {
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${imageUrl}.jpeg`);
            document.body.appendChild(link);
            link.click();
            if (link.parentNode){
                link.parentNode.removeChild(link);
            }
          })
          .catch((error) => {
            console.error('Error downloading image:', error);
          });
      };
      

    const handleDownload = () => {
        if(selectedPets.length !== 0){
            selectedPets.forEach((pet) => {
                downloadImage(pet.url)
            })
        }
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

    const card = sortedPetData.map((pet:PetData, i) => <PetCard key={i} petDataProp={pet} handleSelect={handleSelect} isSelected={isPetSelected(pet)}/>);
    return (                
        <StyledBodyContainer className="body">
            <StyledFiltersContainer className="bodyContentFilters">
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
            <StyledPetContainer className="petCardContainer">
                {card}
            </StyledPetContainer>
        </StyledBodyContainer>
    );
};

export default Body;