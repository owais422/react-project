import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list/List';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';



function App() {
  const texts = ["hello", "I'm Owais","ThankYou"]
  return (
    <div >
    <Header />
 <Slider/>
   
    </div>
  );
}

export default App;
