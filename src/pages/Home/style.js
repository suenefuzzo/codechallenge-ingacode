import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 200px;
  height: 300px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }

  span {
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &:hover span {
    transform: scale(1.2);
  }
`;
