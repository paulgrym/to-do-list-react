import styled from "styled-components";

export const Title = styled.h1`
  margin: 30px 0 20px;

  @media (max-width:${({ theme }) => theme.breakpoints.small}px) {
      text-align:center;
    }
`;
