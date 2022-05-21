import React, {useState,useEffect} from "react";
import triste from "../../assets/triste.jpg"

export default function Medal() {

  const [value,setValue] = useState(1)

  useEffect(() => {
  }, []);

  return ( 
  <div>
    {value == 0 ? (<div className="container d-flex justify-content-center flex-column align-items-center mt-5 mb-5">
    <h4><u>Medallas Ganadas</u></h4>
    <div className="row">
  <div className="card text-center bg-dark ">
    <img src="" alt="PS4" className="img-titulo" />
    <div className="card-body text-light card-cont">
      <h4 className="card-title">czxc</h4>
      <p className="card-text small text-secondary w-75 mx-auto">adsa</p>
    </div>
  </div>
  </div>
  </div>) : (<div className="container d-flex justify-content-center flex-column align-items-center mt-5 mb-5">
    <h4><u>Medallas Ganadas</u></h4>
    <h6 className="text-danger">NO HAS GANADO NINGUNA</h6>
    <div className="row d-flex justify-content-center">
      <img src={triste} alt="triste" style={{width:"50vh"}} />
  </div>
  </div>) }
  </div>
  )
}
