import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: large;
  font-family: sans-serif;
`;

export const Nav = styled.nav`
  border-bottom: 1px solid black;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const NavLink = styled(Link)`
  margin-right: 15px;
  color: crimson;
  text-decoration: none;
  font-size:  medium;
`;

export const Logo = styled.span`
  font-size: xx-large;
`
