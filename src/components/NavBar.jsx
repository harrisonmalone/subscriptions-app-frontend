import React from "react";
import { Nav, NavLink, Logo } from "../styles/App";
import { useHistory } from 'react-router-dom'

export function NavBar() {
  const history = useHistory()
  
  function logout(e) {
    e.preventDefault();
    localStorage.removeItem("token");
    history.push("/login")
  }

  return (
    <Nav>
      <NavLink to="/subscriptions"><Logo>💵</Logo></NavLink>
      <NavLink to="/subscriptions/new">New Subscription</NavLink>
      <NavLink to="/" onClick={logout}>Logout</NavLink>
    </Nav>
  );
}
