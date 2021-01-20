import React from "react";
import { Nav, RouterLink } from "../styles/App";
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
      <RouterLink to="/subscriptions">Home</RouterLink>
      <RouterLink to="/subscriptions/new">New Subscription</RouterLink>
      <RouterLink to="/" onClick={logout}>Logout</RouterLink>
    </Nav>
  );
}
