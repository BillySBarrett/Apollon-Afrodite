import React from "react";

import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About.js";
import Gallery from "./Pages/Gallery/Gallery.js";
import Brands from "./Pages/BrandPage/Brands.tsx";

import { Routes, Route } from "react-router-dom";

//ADD 404 no match!

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Routes>
        <Route path="/Apollon-Afrodite/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
