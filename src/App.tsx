import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import PetDataFetch from './PetDataFetch';
import './App.css';
// import { PetData } from './PetDataFetch';

export const PetDataContext:any = createContext(undefined)
// export type PetDataContextType = PetData[] | undefined;

// export const PetDataContext = createContext<PetDataContextType>(undefined);


// interface petDataObject {
//   title: string;
//   description: string;
//   url: string;
//   created: string;
// }

// interface petDataArray {
//   petData: petDataObject[]
// }

function App() {

  const petData = PetDataFetch()
  return (
    <PetDataContext.Provider value={petData}>
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </PetDataContext.Provider>
  );
}

export default App;