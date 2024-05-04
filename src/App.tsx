import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header'
import Body from './Body'
import AboutMe from './AboutMe';
import Footer from './Footer'
import PetDataFetch from './PetDataFetch';
import './App.css';
// import { PetData } from './PetDataFetch';

const StyledBody = styled.div`
  background-color: light yellow;
`

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
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about" element={<AboutMe />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </PetDataContext.Provider>
  );
}

export default App;