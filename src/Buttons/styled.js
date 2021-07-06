import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    cursor: pointer;
    margin: 0 0 0 20px;
    transition: color 0.3s;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(110%);
    }

    &:disabled { 
        filter: none;
        color: ${({ theme }) => theme.colors.disabledColor};
        cursor: not-allowed;
    }
`;