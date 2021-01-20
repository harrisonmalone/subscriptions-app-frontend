import React from "react";
import { Nav, NavLink, Logo } from "../styles/App";

export function LoggedOutNavbar() {
  return (
    <Nav>
      <NavLink to="/login"><Logo>💵</Logo></NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/sign-up">Sign Up</NavLink>
    </Nav>
  );
}
