import React from "react";

import NavBar from "./CommonComponents/NavBar.js";
import Footer from "./CommonComponents/Footer.js";

import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About";
import Gallery from "./Pages/Gallery/Gallery.jsx";
import Brands from "./Pages/BrandPage/Brands.tsx";

import { Routes, Route } from "react-router-dom";

//ADD 404 no match!

function App() {
  return (
    <div className="overflow-x-hidden p-0 m-0">
      <NavBar />
      <Routes>
        <Route path="/Apollon-Afrodite/" element={<Home />} />
        <Route path="/Apollon-Afrodite/about" element={<About />} />
        <Route path="/Apollon-Afrodite/gallery" element={<Gallery />} />
        <Route path="/Apollon-Afrodite/brands" element={<Brands />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
