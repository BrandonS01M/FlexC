import styled from 'styled-components';

const StyledP = styled.p`
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

function P({msn}) {
    return ( 
        <StyledP>{msn}</StyledP>
    );
}


export default P;