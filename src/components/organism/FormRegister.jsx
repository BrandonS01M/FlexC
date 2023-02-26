import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Button from "../atoms/Button";
import Imagen from "../atoms/Imagen";
import "../../assets/styles/FormRegister.css"

function FormRegister() {
    return ( 
        <>
        <Imagen/>
        <div className="container_P">
            <div className="container_FormRegister">
            
                <Title>Registrate YA!</Title>

                <WrapperInput
                msn="Full Name"
                type="text"
                placeholder="Write Full Name" />

                <WrapperInput
                msn="E-mail Address"
                type="text"
                placeholder="Write E-mail Address" />

                <WrapperInput
                msn="User"
                type="text"
                placeholder="Write User" />

                <WrapperInput
                msn="Telephone Number"
                type="text"
                placeholder="Write Telephone Number" />
            
                <WrapperInput
                msn="Password"
                type="password"
                placeholder="Write Password" />

                <Button
                msn="Enviar"/>
                

                <h4>Ya tienes Cuenta? </h4> <Link to="/">Inicia Sesion</Link>
            </div>
        </div>
        </>
     );
}

export default FormRegister;