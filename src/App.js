import './App.css';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import Perfume from './pages/Perfume/Perfume';
import Body from './pages/Body/Body';
import Candle from './pages/Candle/Candle';
import Grooming from './pages/Grooming/Grooming';
import Mbti from './pages/MBTI/Mbti';
import BackToTopText from './components/ScrollButton/BackToTopText';
import Announcement from './Announcement';
import React, { useState, useEffect } from "react";

function App() {

  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch('hello')
    .then(response => response.text())
    .then(message => {
      setMessage(message);
    });
  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Announcement />
        <BackToTopText />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/body" element={<Body />} />
          <Route path="/candle" element={<Candle />} />
          <Route path="/grooming" element={<Grooming />} />
          <Route path="/Mbti" element={<Mbti />} />
        </Routes>
        <h1 className="App-title">{message}</h1>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;