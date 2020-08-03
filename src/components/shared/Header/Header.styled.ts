import styled, { css } from "styled-components";

export const flex = css`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

export const Header = styled.header`
    ${ flex }
    width: 100%;
    min-height: 4rem;
    padding: 0 1em;
    border-bottom: 1px solid lightgray;
    justify-content: space-evenly;
    box-shadow: 0 0 16px 1.8px lightgray;
    background-color: white;
`;

export const Title = styled.h1`
    font-weight: 300;
`;