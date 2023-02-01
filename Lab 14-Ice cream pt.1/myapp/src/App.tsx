import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { AdDesign } from './components/AdDesign';
import { Votes } from './components/Votes';
import { Ad } from './components/Ad';

function App() {
  return (
    <>
    <Header user={'Chirpus'}></Header>
    <div className="main">
    <div className="adFlavor">
    <Ad flavor={'Chocolate'} isLight={false} fontSize={24} />
    <Ad flavor={'Vanilla'} isLight={true} fontSize={24} />
    <Ad flavor={'Strawberry'} isLight={false} fontSize={24} />
    </div> 
    <AdDesign /> 
    <Votes />
    </div> 
    </>
   
  );
}

export default App;
