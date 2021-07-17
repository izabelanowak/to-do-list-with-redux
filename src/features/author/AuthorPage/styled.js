import styled from "styled-components";

export const Paragraph = styled.p`
    line-height: 1.5;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryColor};
`;