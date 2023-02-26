import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Imagen from "../atoms/Imagen";
import Button from "../atoms/Button";
import "../../assets/styles/FormLogin.css";

function FormLogin() {

    const handlerClick = (e) => {

    }
    return ( 
        <>
        <Imagen />
        <div className="container_P">
            <div className="container_FormLogin">
            
                <Title>Bienvenido</Title>

                <WrapperInput
                msn="User Name"
                type="text"
                placeholder="Write User Name" />
            
                <WrapperInput
                msn="Password"
                type="password"
                placeholder="Write Password" />

            <p>Quieres <Link to="/cambiarcontraseña">Cambiar tu Contraseña?</Link></p> 

                <Button
                msn="Enviar"
                onClick={handlerClick}/>
                <Link to="/notFound">Enviar</Link>

            <p>No tienes una Cuenta? <Link to="/register">Regístrate</Link> </p>
            
            </div>
        </div>
        </>
     );
}

export default FormLogin;