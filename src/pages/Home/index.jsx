/* eslint-disable no-unused-vars */
import React from "react";
import { StyledLink, StyledMain } from "../../App";
import { Cards } from "../../components/Cards";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <StyledMain>
        <StyledLink to ="/romannumeral">Desafio 1º</StyledLink>
        <StyledLink to ="/passwordcreator">Desafio 2º</StyledLink>
        <StyledLink to ="/elevator">Desafio 3º</StyledLink>
      </StyledMain>
    </>
  );
};
