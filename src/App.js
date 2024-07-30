import React from 'react';
import './App.css';
import Header from './Header';
import Intro from './Intro';
import Work from './Work';
import Footer from './Footer';
import Contact from './Contact';
import Education from './Education';
import Project from './Project';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Work />
            </>
          }
        />
        <Route path="/Education" element={<Education />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
