import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header'
import Body from './components/Body'
import PetProfile from './components/PetProfile'
import About from './components/About';
import Footer from './components/Footer'
import PetDataFetch from './PetDataFetch';
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
              <Route path="/:name" element={<PetProfile />}/>
              <Route path ="/about" element={<About />} />
          </Routes>
          <div>
            <Footer />
          </div>
      </PetDataContext.Provider>
  );
}

export default App;