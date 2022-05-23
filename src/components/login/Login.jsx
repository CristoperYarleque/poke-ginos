import { useState } from "react"
import "../../style/login.css"

import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/Services";

import { Link } from "react-router-dom"

export default function Login() {

	const [user, setUser] = useState({
		correo: "",
		password: "",
	  });

	  const actualizarInput = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	  };

	  const navigate = useNavigate();

	  const manejarSubmit = async (e) => {
		e.preventDefault();
		const result = await login(user);
		//si los datos son correctos
		if (result.message === "error") {
		  Swal.fire({
			icon: "error",
			title: "Datos Incorrectos",
			text: "Favor de intentar de nuevo...",
			showConfirmButton: false,
			timer: 2000,
		  });
		} else if (result.message === "admin") {
		  localStorage.setItem("token", result.token);
		  localStorage.setItem("correo", result.usuarioEncontrado.correo);
		  Swal.fire({
			icon: "success",
			title: "Datos Correctos",
			text: "En breve a la zona de Admin..",
			showConfirmButton: false,
			timer: 2000,
		  });
		  navigate("/index");
		} else {
		  localStorage.setItem("correo", result.usuarioEncontrado.correo);
		  Swal.fire({
			icon: "success",
			title: "Datos Correctos",
			text: "Logeado Correctamente",
			showConfirmButton: false,
			timer: 2000,
		  });
		  navigate("/");
		}
	  };

return ( 
    <div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Login Poke-Ginos</h3>
		<div className="card-text">
			<form
			onSubmit={(e) => {
				manejarSubmit(e);
			  }}>
				<div className="form-group">
					<label for="exampleInputEmail1">Email</label>
					<input 
					type="email" 
					value={user.correo}
					required
					pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
					minLength="4"
					onChange={(e) => {
						actualizarInput(e);
					  }}
              		name="correo" 
					className="form-control form-control-sm" 
					id="exampleInputEmail1" 
					aria-describedby="emailHelp" 
					placeholder="Ingrese Email..." />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Contraseña</label>
					<input 
					type="password" 
					className="form-control form-control-sm" 
					id="exampleInputPassword1" 
					placeholder="Ingrese Contraseña..."
					required
					name="password"
					onChange={(e) => {
						actualizarInput(e);
					  }}
              		minLength="3" />
				</div>
				<button type="submit" className="btn btn-primary btn-block">Ingresar</button>
				
				<div className="sign-up">
					No tienes cuenta? <Link to="/register"><a href="#">Crear cuenta</a></Link>
				</div>
			</form>
		</div>
	</div>
</div>
</div>
)
}
