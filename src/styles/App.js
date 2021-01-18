import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: x-large;
  font-family: sans-serif;
`;

export const Nav = styled.nav`
  border-bottom: 1px solid black;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const RouterLink = styled(Link)`
  margin-right: 10px;
  color: crimson;
  text-decoration: none;
`;
