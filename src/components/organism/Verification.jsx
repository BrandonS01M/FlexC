import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Imagen from "../atoms/Imagen";
import Button from "../atoms/Button";
import "../../assets/styles/Verification.css"

function Verification() {
    return ( 
        <>
        <Imagen />
            <div className="container_P">
                <div className="FormChange_Password">
            
                    <Title>Cambio de Contraseña</Title>

                    <WrapperInput
                    msn="New Password"
                    type="password"
                    placeholder="Write Password" />

                    <WrapperInput
                    msn="Confirm Passwordr"
                    type="password"
                    placeholder="Write Password" />

                    <Button 
                    msn="Guardar Contraseña"/>

                    <Link to="/">Guardar Contraseña</Link>
                </div>
            </div>
        </>
     );
}

export default Verification;