import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationList = styled.ul`
  background-color:${({ theme }) => theme.colors.primaryColor};
  display:flex;
  padding:16px 0;
  margin:0;
  justify-content:center;
  list-style:none;

  @media (max-width:${({ theme }) => theme.breakpoints.small}px) {
      flex-direction: column;
      align-items:center;
    }
`

export const NavigationItem = styled.li`
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
  
  &:hover{
    border-bottom: 1px solid;
  }
`