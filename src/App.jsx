import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './Component/NavBar';

/*
import { Navbar } from './Components/NavBar/Navbar';
import { Home } from './Components/Home/Home';
import { Product } from "./Components/Products/Product";
import { Contact } from "./Components/Contact/Contact ";
import { Services } from "./Components/Services/Services";
*/

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      { /* <Navbar /> */}
      <Routes>
       { /*
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;