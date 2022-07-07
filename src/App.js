import React from 'react';

import NavBar from './NavBar.js'
import Footer from './Footer.js'

import Home from './Pages/home.js'
import About from './Pages/about.js'
import Gallery from './Pages/gallery.js'

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
