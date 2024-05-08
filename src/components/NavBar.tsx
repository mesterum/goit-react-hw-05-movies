import { NavLink, Outlet } from "react-router-dom";
import styled from 'styled-components';

const NavBarStyle = styled.nav`
  display: flex;
  padding: 1rem;
  column-gap: 1rem;
  // background-color: #eee;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
  margin-bottom: .5rem;
  list-style: none;
  >li>a {
    text-decoration: none;
    font-weight: bold;
    color: black;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      color: #b14;
    }
  }
`;

export default function NavBar() {
  return <>
    <NavBarStyle>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/movies">Movies</NavLink></li>
    </NavBarStyle >
    <Outlet />
  </>
}
