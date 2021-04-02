import HomeLogoLink from "components/HomeLogoLink/HomeLogoLink";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Link = ({ children, to, ...restProps }) => {
  return (
    <li>
      <NavLink to={to} {...restProps}>
        {children}
      </NavLink>
    </li>
  );
};

export const Navbar = styled.nav`
  font-size: 1em;
  flex: 1;
  align-self: flex-start;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
  background-color: white;
  border-bottom: 1px solid #ccc; //replace with gray 2
`;

export const MobileNavbar = styled(Navbar)``;

Navbar.Logo = styled(HomeLogoLink)``;

Navbar.Items = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

const activeClassName = "activeNav";

Navbar.ItemLink = styled(Link).attrs({
  activeClassName,
})`
  height: 100%;
  padding: 10px 15px;
  &.${activeClassName} {
    background: #ccc;
  }
`;

MobileNavbar.Items = styled(Navbar.Items)`
  position: fixed;
  bottom: 0;
  width: 100vw;
  flex: 1;
  padding: 25px 15px;
  justify-content: space-around;
  height: 45px;
  border-top: 1px solid #ccc; //replace with gray 2
  margin: 0;
`;

MobileNavbar.ItemLink = styled(Navbar.ItemLink)``;
