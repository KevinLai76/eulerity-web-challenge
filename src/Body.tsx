import React, { useContext } from 'react';
import { PetDataContext } from './App';
import PetCard from './PetCard';

const Body = () => {
    const petData: petDataObject[] = useContext(PetDataContext);

    interface petDataObject {
        title: string;
        description: string;
        url: string;
        created: string;
    }

    const card = petData.map((pet) => <PetCard key={pet.created} petDataProp={pet} />);

    return (
        <div>
            {card}
        </div>
    );
};

export default Body;