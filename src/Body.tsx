import React, { useContext, useState } from 'react';
import { PetDataContext } from './App';
import PetCard from './PetCard';

interface petDataObject {
    title: string;
    description: string;
    url: string;
    created: string;
}

const Body = () => {
    const petData: petDataObject[] = useContext(PetDataContext);
    const [searchInput, setSearchInput] = useState<string>('')
    
    const handleChange = (e:any) => {
        e.preventDefault()
        setSearchInput(e.target.value)
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
    
    const card = filteredPetData.map((pet, i) => <PetCard key={i} petDataProp={pet} />);

    return (                
        <div className="body">
            <div className="bodyContentFilters">
                <button>Select All</button>
                <button>Clear All Selection</button>
                <input type="text" placeholder="Search Here" onChange={handleChange} value={searchInput}/>
            </div>
            <div className="petCardContainer">
                {card}
            </div>
        </div>
    );
};

export default Body;