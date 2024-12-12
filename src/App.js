import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './pages/Layout';
import Blogs from './pages/Blogs';
import Nopage from './pages/Nopage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="nopage" element={<Nopage />} />
          <Route path="about" element={<About/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
