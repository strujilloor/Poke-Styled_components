import styled, { css } from 'styled-components';

export const Button = styled.button<{ active?: boolean }>`
    min-width: 112px;
    background-color: ${({ theme }) => theme.color.yellow.light};
    color: white;
    padding: 0.75rem 1.25rem; /* 12px 20px */
    border: none;
    border-radius: 6px;

    font-size: 0.75rem; /* 12px */
    line-height: 0.9375rem; /* 15px */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    outline: none;
    
    ${({ active }) => active &&
        css`
            background-color: ${({ theme }) => theme.color.accent};
            box-shadow: ${({ theme }) => theme.shadows.elevate};
            &:hover {
                background-color: ${({ theme }) => theme.color.white};
                border: 1px solid ${({ theme }) => theme.color.accent};
                color: ${({ theme }) => theme.color.accent};
                box-shadow: ${({ theme }) => theme.shadows.elevate};
            }
            &:active {
                box-shadow: ${({ theme }) => theme.shadows.down};
            }
        `
    }
`;