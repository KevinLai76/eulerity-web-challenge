import React, { createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header'
import Body from './components/Body'
import PetProfile from './components/PetProfile'
import About from './components/About';
import Footer from './components/Footer'
import PetDataFetch from './PetDataFetch';
import ErrorPage from './ErrorPage';
import { PetData } from './PetDataFetch';

type PetDataContext = PetData[] | undefined
export const PetDataContext:any = createContext<PetDataContext>(undefined)

function App() {
  const petData = PetDataFetch()
  
  return (
      <PetDataContext.Provider value={petData}>
          <div>
            <Header />
          </div>
          <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/pet/:name" element={<PetProfile />}/>
              <Route path="/about" element={<About />} />
              <Route path="*" element={<ErrorPage />} />
          </Routes>
          <div>
            <Footer />
          </div>
      </PetDataContext.Provider>
  );
}

export default App;