import styled from "styled-components";

export const StyledButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;

  @media (max-width:${({ theme }) => theme.breakpoints.small}px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: inherit;
  color: ${({ theme }) => theme.colors.primaryColor};
  padding: 10px 0;
  margin: 0 0 0 20px;
  transition: color 0.4s;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverColor};
    cursor: pointer;
  }

  &:disabled {
    color: #888;
  }

  @media (max-width:${({ theme }) => theme.breakpoints.small}px) {
    margin: 0;
  }
`;
