import React from 'react';
import { useState, useEffect } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import './App.css';

function App() {

  useEffect(() => {
    fetch("https://eulerity-hackathon.appspot.com/pets")
    .then(response => response.json())
    .then(data => console.log(data))
  },[])

  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
