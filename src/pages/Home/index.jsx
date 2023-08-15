/* eslint-disable no-unused-vars */
import React from "react";
import { StyledMain } from "../../App";
import { StyledLink } from "./style";

export const Home = () => {
  return (
    <>
      <StyledMain>
        <StyledLink to ="/romannumeral">Números Romano</StyledLink>
        <StyledLink to ="/passwordcreator">Gerador de senhas</StyledLink>
        <StyledLink to ="/elevator">Elevador</StyledLink>
      </StyledMain>
    </>
  );
};
