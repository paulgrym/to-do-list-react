import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: white;
  box-shadow: 1px -1px 5px 0px #DDDDDD;
`;

export const Header = styled.header`
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-top: 10px;
  padding: 0 20px;

  @media (max-width:${({ theme }) => theme.breakpoints.small}px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Title = styled.h2`
  padding: 20px 0;
  margin: 0;
  font-size: 20px;
`;