import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  padding: 20px;

  @media (max-width:${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primaryColor};
  color: white;
  border: none;
  padding: 10px;
  margin-left: 20px;
  transition: background-color 0.3s, transform 0.3s;

  @media (max-width:${({ theme }) => theme.breakpoints.medium}px) {
    margin-left: 0;
    margin-top: 10px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverColor};
    cursor: pointer;
    transform: scale(1.1);

    @media (max-width:${({ theme }) => theme.breakpoints.medium}px) {
      transform: scale(1.05);
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.activeColor};
  }
`;
