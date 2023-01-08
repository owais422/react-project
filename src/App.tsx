import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list/List";
import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import ReactDOM from "react-dom/client";
import Buttons from './components/button/Button'
import {
  Routes,
  Route,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cards from './components/cards/Cards'
import Forms from "./components/forms/Forms";


function App() {
  const texts = ["hello", "I'm Owais", "ThankYou"];
  return (
    <>
      <Header />
      <Slider />
      <Cards/>
      <Forms/>
      
    </>
    // <BrowserRouter>
    //   <Routes>
    //     <Route  path="/" element={<div>Home page</div>}/>

    //     <Header />
    //     <Slider />

    //   </Routes>

    // </BrowserRouter>
  );
}

export default App;
