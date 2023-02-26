import { Link } from "react-router-dom";
import Title from "../atoms/Title";
import WrapperInput from "../molecules/WrapperInput";
import Imagen from "../atoms/Imagen";
import "../../assets/styles/ChangePass.css"
import Button from "../atoms/Button";

function FormContraseñaNueva() {
    return ( 
        <>
            <Imagen />
                <div className="container_P">
                    <div className="container_FormChanPass">
            
                        <Title>Cambio de Contraseña</Title>

                        <WrapperInput
                        msn="User Name"
                        type="text"
                        placeholder="Write User Name" />

                        <WrapperInput
                        msn="Telephone Number"
                        type="text"
                        placeholder="Write Telephone Number" />
                    
                        <WrapperInput
                        msn="Question"
                        type="text"
                        placeholder="Write Answer" />

                        <Button 
                        msn="Enviar"/>
                        <Button 
                        msn="Cancelar"/>
                        
                        
                        //<Link to="/check">Verificar</Link>
                        //<Link to="/">Cancelar</Link>
                        
                    </div>
                </div>
        </>
     );
}

export default FormContraseñaNueva;