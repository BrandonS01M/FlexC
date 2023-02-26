import styled from 'styled-components';

const StyledLabel = styled.label`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

function Label({msn}) {
    return ( 
        <StyledLabel>{msn}</StyledLabel>
    );
}


export default Label;