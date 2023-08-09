/* eslint-disable no-unused-vars */
import React from "react";
import { StyledMain } from "../../App";
import { Cards } from "../../components/Cards";

export const Home = () => {
  return (
    <>
      <StyledMain>
        <Cards>
          <div>
            <img src="" alt="" />
            <h2>1° Desafio</h2>
          </div>
          <p>Conversor de números romanos para decimal</p>
        </Cards>

        <Cards>
          <div>
            <img src="" alt="" />
            <h2>2° Desafio</h2>
          </div>
          <p>Gerador de senhas</p>
        </Cards>

        <Cards>
          <div>
            <img src="" alt="" />
            <h2>3° Desafio</h2>
          </div>
          <p>Elevador</p>
        </Cards>
      </StyledMain>
    </>
  );
};
