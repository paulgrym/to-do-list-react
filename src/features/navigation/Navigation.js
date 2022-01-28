import { StyledNavigation, StyledNavLink, NavigationList, NavigationItem } from "./styled";

const Navigation = () => (
  <StyledNavigation>
    <NavigationList>
      <NavigationItem>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </NavigationItem>
      <NavigationItem>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </NavigationItem>
    </NavigationList>
  </StyledNavigation>
);

export default Navigation;
