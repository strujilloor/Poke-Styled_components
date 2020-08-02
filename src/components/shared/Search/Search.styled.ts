import styled from "styled-components";

export const Search = styled.div`
    min-width: 263px;
    height: 3rem;
    background-color: #f9f9f8;
    border-radius: 16px;
    padding: 0 1em;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    /* justify-content: space-evenly; */
`;

export const IconContainer = styled.div`
    height: 100%;
    width: 20px;
    margin-right: 0.5em;
    cursor: pointer;

    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.img`
    width: 16px;
`;

export const Input = styled.input`
    background-color: inherit;
    border: none;
    outline: none;
    font-size: 1rem;
    
    flex: 1 1;
`;