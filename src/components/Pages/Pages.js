import React from "react";
import { Routes, Route } from "react-router-dom";
import MainHeader from "./Header/MainHeader";
import Home from './Home/Home'
import Casual from './Casuals/Casual';
import Formal from './Formals/Formal';
import Print from './Prints/Print';
import Shawl from './Shawls/Shawl';
import Bottom from './Bottoms/Bottom';
import BareezeMan from './BareezeMan/BareezeMan';
import CasualProduct from "./Casuals/CasualProduct";
import BareezeProduct from "./BareezeMan/BareezeProduct";
import BottomProduct from './Bottoms/BottomProduct';
import FormalProduct from './Formals/FormalProduct'
import PrintProduct from './Prints/PrintProduct';
import Login from "./Login/Login";
import Register from "./Login/Register";
import ShawlProduct from "./Shawls/ShawlProduct";

const Pages = () => {
  return (
    <>
      <MainHeader />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path='/casual' element={<Casual />} />
        <Route path='/formal' element={<Formal />} />
        <Route path='/print' element={<Print />} />
        <Route path='/shawl' element={<Shawl />} />
        <Route path='/bottom' element={<Bottom />} />
        <Route path='/bareezeman' element={<BareezeMan />} />
        <Route path='/casualproduct/:id' element={<CasualProduct />} />
        <Route path='/bareezeproduct/:id' element={<BareezeProduct/>} />
        <Route path='/bottomproduct/:id' element={<BottomProduct/>} />
        <Route path='/formalproduct/:id' element={<FormalProduct/>} />
        <Route path='/printproduct/:id' element={<PrintProduct/>} />
        <Route path='/shawlproduct/:id' element={<ShawlProduct/>} />
        <Route path="/register" element={<Register />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </>
  );
};

export default Pages;
