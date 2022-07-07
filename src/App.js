import React from 'react';

import NavBar from './NavBar.js'
import Footer from './Footer.js'

import Home from './Pages/Home/Home.js'
import About from './Pages/About.js'
import Gallery from './Pages/Gallery.js'

import {Routes, Route} from 'react-router-dom'


function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/gallery" element={<Gallery />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
