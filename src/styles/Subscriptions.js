import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const OuterCard = styled.div`
  width: 50%;
`;

export const InnerCard = styled.div`
  margin: 10px;
  border: 1px solid black;
  padding: 10px;
`;

export const CardLink = styled(Link)`
  margin-right: 10px;
  text-decoration: none;
  color: blue;
`;
