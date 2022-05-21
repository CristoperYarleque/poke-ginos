import { useEffect } from "react"
import "../../style/login.css"

export default function Login() {

	useEffect(() => {
	}, []);
return ( 
    <div className="global-container">
	<div className="card login-form">
	<div className="card-body">
		<h3 className="card-title text-center">Login Poke-Ginos</h3>
		<div className="card-text">
		<div class="alert alert-danger alert-dismissible fade show" role="alert">email o contraseña incorrecta</div>
			<form>
				<div className="form-group">
					<label for="exampleInputEmail1">Email</label>
					<input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese Email..." />
				</div>
				<div className="form-group">
					<label for="exampleInputPassword1">Contraseña</label>
					<input type="password" className="form-control form-control-sm" id="exampleInputPassword1" 
					placeholder="Ingrese Contraseña..."/>
				</div>
				<button type="submit" className="btn btn-primary btn-block">Ingresar</button>
				
				<div className="sign-up">
					No tienes cuenta? <a href="#">Crear cuenta</a>
				</div>
			</form>
		</div>
	</div>
</div>
</div>
)
}
