import { useEffect } from "react"
import {Link} from "react-router-dom"
import "../../style/login.css"

export default function Register() {

	useEffect(() => {
	}, []);
return ( 
    <div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Registrar</h3>
		<div className="card-text">
			<form>
            <div className="form-group">
					<label for="exampleInputEmail1">Nombre</label>
					<input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese nombre..." />
				</div>
				<div className="form-group">
					<label for="exampleInputEmail1">Email</label>
					<input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese Email..." />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Contraseña</label>
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1" 
					placeholder="Ingrese Contraseña..."/>
				</div>
                <div className="d-flex justify-content-center">
				<button type="submit" className="btn btn-primary btn-block me-2">Crear Cuenta</button>
                <Link to="/"><button className="btn btn-danger btn-block ms-2">Regresar</button></Link>
                </div>
			</form>
		</div>
	</div>
</div>
</div>
)
}