import styled from "styled-components";

const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.colors.primaryColor};
    border: none;
    cursor: pointer;
    margin: 0 0 10px 15px;
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

export default Button;