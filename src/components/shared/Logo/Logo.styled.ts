import styled from "styled-components";


export const Logo = styled.div`
    width: 5rem;
    height: 4rem;
    background-image: url(${ props => props.theme.logo });
    cursor: pointer;
    object-fit: cover;
    /* background-position: center; */
    background-size: 4rem;
    background-repeat: no-repeat;
`;