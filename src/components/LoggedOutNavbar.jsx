import React from "react";
import { Nav, RouterLink } from "../styles/App";

export function LoggedOutNavbar() {
  return (
    <Nav>
      <RouterLink to="/login">Login</RouterLink>
      <RouterLink to="/sign-up">Sign Up</RouterLink>
    </Nav>
  );
}
