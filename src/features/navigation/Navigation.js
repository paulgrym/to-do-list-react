import { StyledNavLink, NavigationList, NavigationItem } from "./styled";

const Navigation = () => (
  <nav>
    <NavigationList>
      <NavigationItem>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </NavigationItem>
      <NavigationItem>
        <StyledNavLink to="/autor">O autorze</StyledNavLink>
      </NavigationItem>
    </NavigationList>
  </nav>
);

export default Navigation;
