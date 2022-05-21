import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Inicio from "./views/Inicio"
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

  const [value, setvalue] = useState(1)

  useEffect(() => {
  }, [value]);


  return (
    <div>
      {value == 0 ? (
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Inicio />} />
          </Routes>
          <Footer />
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>)}
    </div>
  );
}

export default App;
