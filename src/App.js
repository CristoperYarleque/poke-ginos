import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { validarCorreo } from './services/Services'
import Swal from "sweetalert2";

import Inicio from "./views/Inicio"
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {

  const [correo, setCorreo] = useState()

  const validadorDeEmail = async () => {
    if (localStorage.getItem("correo")) {
      try {
        const result = {
          correo: localStorage.getItem("correo")
        }
        const data = await validarCorreo(result)
        console.log(data);
        if (data.message === "existe") {
          setCorreo(data.correo)
        } else if (data.message === "no existe") {
          Swal.fire({
            icon: "error",
            title: "Correo Incorrecto",
            text: "ADIOS",
            showConfirmButton: false,
            timer: 2000,
          });
          localStorage.removeItem('nombre')
          localStorage.removeItem('apellido')
          localStorage.removeItem('correo')
          setCorreo(null)
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  const hola = 1


  useEffect(() => {
    validadorDeEmail()
  }, [])

  return (
    <div>
      {hola == 1 ? (
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
            <Route path='/' element={
              <Login />
            } />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>)}
    </div>
  );
}

export default App;
