import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNav = styled.nav`
    background-color: ${({ theme }) => theme.colors.primaryColor};
`;

export const List = styled.ul`
    list-style: none;
    display: flex;
    margin: 0 auto;
    justify-content: center;
`;

export const Item = styled.li`
    padding: 20px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textColor};

    &.${activeClassName}{
        font-weight: bold;
    }
`;