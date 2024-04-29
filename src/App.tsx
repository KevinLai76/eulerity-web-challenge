import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import usePetContext from './usePetContext';
import './App.css';

export const PetDataContext:any = createContext(undefined)

function App() {
  
  const {petData} = usePetContext()
  
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