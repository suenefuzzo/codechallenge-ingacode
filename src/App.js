import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledMain = styled.main`
  background: #114357; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f29492, #114357);
  background: linear-gradient(to right, #f29492, #114357);

  height: 100vh;
  width: 100vw;

  background-attachment: fixed;
  background-size: cover;
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const StyledLink = styled(Link)`

  width: 30rem;
  height: 20rem;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  z-index: 1;
  background: inherit;
  overflow: hidden;

  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    background: inherit;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: inset 0 0 2000px rgba(255, 255, 255, 0.5);
    filter: blur(10px);
    margin: -20px;
  }
`;
