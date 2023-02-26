import styled from "styled-components";

const StyledButton = styled.button`
    width: 280px;
    height: 35px;
    border-radius: 90px;
    border: none;
    background: #FF7F32;
    margin-bottom: 10px;
    font-size: 1rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
`;

function Button({msn}) {
    return ( 
        <StyledButton>{msn}</StyledButton>
    );
}


export default Button;