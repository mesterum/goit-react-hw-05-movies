// import PropTypes from "prop-types";

import { NavLink, Outlet } from "react-router-dom";

// import { Blocks } from 'react-loader-spinner'
//   ;
// type Props = { visible: boolean }


export default function NavBar() {
  return <>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/movies">Movies</NavLink></li>
    </ul>
    <Outlet />
  </>
}

NavBar.propTypes = {
  // visible: PropTypes.bool.isRequired,
};