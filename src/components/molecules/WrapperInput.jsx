import Label from "../atoms/Label";
import Input from "../atoms/Input";

function WrapperInput({msn, type, placeholder}) {
    return ( 
        <div className="">
            <Label msn={msn}/>
            <Input type={type} placeholder={placeholder}/>
        </div>
     );
}

export default WrapperInput;