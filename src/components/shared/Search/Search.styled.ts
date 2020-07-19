import styled from "styled-components";

export const Search = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    height: 3rem;
    background-color: #f9f9f8;
    border-radius: 16px;
    padding: 0 1em;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding-right: 1em;
    /* background-color: #f9f9f8; */
    height: 100%;
    width: 15%;
    cursor: pointer;
`;

export const Icon = styled.img`
    width: 16px;
`;

export const Input = styled.input`
    width: 85%;
    background-color: inherit;
    border: none;
    outline: none;
    font-size: 1rem;
`;