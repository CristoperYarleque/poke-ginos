import React, {useState,useEffect} from "react";
import triste from "../../assets/triste.jpg"
import medallasCristo from "../../data/medal-cristo"

export default function Medal() {

  const [value,setValue] = useState(1)

  useEffect(() => {
  }, []);

  return ( 
  <div>
    {medallasCristo.length > 0 ? (<div className="container d-flex justify-content-center flex-column align-items-center mt-5 mb-5">
    <h4><u>Medallas Ganadas</u></h4>
    <div className="row d-flex justify-content-center">
      {medallasCristo.map(({id,nombre,descripcion,imagen}) => (
        <div key={id} className="card d-flex justify-content-center text-center bg-dark m-2
        col-sm-8 col-md-6 col-lg-4">
        <img src={imagen} alt={nombre} className="img-titulo"  />
        <div className="card-body text-light card-cont">
          <h4 className="card-title">{nombre}</h4>
          <p className="card-text small text-secondary">{descripcion}</p>
        </div>
      </div>
      ))}
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
