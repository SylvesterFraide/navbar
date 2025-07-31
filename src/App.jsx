import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import { Consulting } from "./Component/Pages/Consulting";
import { ContactUs } from "./Component/Pages/ContactUs";
import { Design } from "./Component/Pages/Design";
import { Development } from "./Component/Pages/Development";
import { Home } from "./Component/Pages/Home";
import { Marketing } from "./Component/Pages/Marketing";
import { Products } from "./Component/Pages/Products";
import { SignUp } from "./Component/Pages/SignUp";

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
      {/* <Navbar /> */}
      <Routes>
        {/*
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Contact" element={<Contact />} />
        */}

        <Route path="/" element={<Home />} />
        <Route path="/Consulting" element={<Consulting />} />
        <Route path="/Design" element={<Design />} />
        <Route path="/Development" element={<Development />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
