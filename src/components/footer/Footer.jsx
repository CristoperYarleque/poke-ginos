import React from 'react';
import "../../style/footer.css"

    function Footer() {
    return (
          <footer id="footer" className="text-white py-4 bg-black d-flex">
             <div className='container'>
                 <nav className="row"> 
                 <div className="col">
                      <h4>Poke Ginos</h4>
                      <ul className="list-unstyled">
                           <li>Contact@Company.com</li>
                           <li>Piura-Peru</li>
                           <li>964711527</li>    
                      </ul>
                    </div>
                    <div className="col">
                      <h4>Categorias</h4>
                      <ul className="list-unstyled">
                           <li>Pokedex</li>
                           <li>Tipos</li>
                           <li>Torneos</li>    
                      </ul>
                    </div>
                    <div className="col">
                      <h4>Servicio al cliente</h4>
                      <ul className="list-unstyled">
                           <li>FAQ</li>
                           <li>Terminos y Condiciones</li>
                           <li>Privacidad</li>    
                      </ul>
                    </div>

                 <ul className='d-flex col-12 col-md-3 list-unstyled align-items-center'>
                <li className='font-weigth-bold me-4'>Siguenos:</li>
                <li className='d-flex justify-content-between align-items-center'>
                  <i className="bi bi-facebook me-4" style={{ 
                       fontSize: "35px",
                       cursor: "pointer",
                       
                  }}/>
                  <i className="bi bi-instagram me-4 "style={{ 
                       fontSize: "35px",
                       cursor: "pointer",
                       
                  }}/>
                  <i className="bi bi-twitter me-4"style={{ 
                       fontSize: "35px",
                       cursor: "pointer"
                  }}/>
                </li>
                 </ul> 
           <hr />
          <div className='container'>
               <p className='text-center'>
                    &copy;{new Date().getFullYear()} Poke Ginos Todos los derechos reservados | Terminos y Condiciones | Politicas de Privacidad
               </p>
          </div>
        
             </nav>
         
           </div>
           
       </footer> 
    
    )
}
export default Footer