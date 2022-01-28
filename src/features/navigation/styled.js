import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavigation = styled.nav`
  background-color:${({ theme }) => theme.colors.primaryColor};
`

export const NavigationList = styled.ul`
  display:flex;
  padding:16px 0;
  margin:0;
  justify-content:center;

  @media (max-width:${({ theme }) => theme.breakpoints.small}px) {
      flex-direction: column;
      align-items:center;
    }
`

export const NavigationItem = styled.li`
  list-style:none;
  margin:6px 20px;
`

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  text-decoration:none;
  color:white;
  
  &.active{
    font-weight:700;
  }
`