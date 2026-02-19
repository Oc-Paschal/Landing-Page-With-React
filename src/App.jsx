import { Routes, Route } from "react-router-dom";
import Mainlayouts from "./Layouts/Mainlayouts";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Features from "./Pages/Features";
import Footer from "./component/Footer";


import React from 'react'

const App = () => {
  return (
    <>
    <Routes>
      <Route element={<Mainlayouts />}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Features" element={<Features/>}/>
      </Route>
    </Routes>
    
    </>
  )
}

export default App
