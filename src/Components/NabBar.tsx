import React from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import useStyle from "./Style/NavBarStyle";

function NavBar() {
  const { userId } = useParams();
  const classes = useStyle();
  return (
    <div className={classes.navBar}>
      <NavLink className={classes.nav} to={`/users/${userId}/personal`}>Personal</NavLink>
      <NavLink className={classes.nav} to={`/users/${userId}/professional`}>Professional</NavLink>
      <NavLink className={classes.nav} to={`/users/${userId}/academic`}>Academic</NavLink>
      <NavLink className={classes.nav} to={`/users/${userId}/employment`}>Employment</NavLink>
      <Outlet />
    </div>
  );
}

export default NavBar;