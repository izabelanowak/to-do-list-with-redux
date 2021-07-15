import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.accentColor};
`;

export default Input;