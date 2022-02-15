import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  padding: 0 20px 20px;
  margin-top: 20px;
`;

export const ListItem = styled.li`
  list-style-type: none;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  word-break: break-all;

  ${({ hidden }) => hidden && css`
    display:none;
  `}
`;

export const TaskContent = styled.span`
  ${({ done }) => done && css`
    text-decoration:line-through;
  `}
`;

export const Button = styled.button`
  height: 30px;
  width: 30px;
  background-color: hsl(120, 88%, 27%);
  color: white;
  justify-self: center;
  border: none;
  transition: 0.4s;

  &:hover {
  background-color: hsl(120, 88%, 32%);
  cursor: pointer;
  }

  &:active {
    background-color: hsl(120, 88%, 37%);
  }

  ${({ remove }) => remove && css`
    background-color: hsl(0, 93%, 58%);

    &:hover {
      background-color: hsl(0, 93%, 63%);
    }

    &:active {
      background-color: hsl(0, 93%, 68%);
    }
  `}
`;

export const StyledLink = styled(Link)`
  text-decoration:none;
  color: #333;
  transition: color 0.3s;

  &:hover {
      color: ${({ theme }) => theme.colors.hoverColor};
    }
`