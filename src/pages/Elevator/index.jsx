/*
Essenciais: 
    - O usuário pode ver um diagrama de seção transversal de um prédio com quatro andares, um 
poço de elevador, o elevador e um botão para cima no primeiro andar. 
        -> parte gráfica, visual! Visualização completa do simulador
    - O usuário pode ver o painel de controle do elevador com um botão para cada um dos 
andares ao lado do diagrama do elevador. 
        -> parte gráfica! Visualização do painel de controle para escolha do andar.
    - O usuário pode clicar no painel de controle do elevador para selecionar o andar para o qual 
ele deve ir. 
        -> evento! leva o usuário ao andar escolhido através do painel.
    -  O usuário pode selecionar vários andares e a ordem a ser atendida é na sequência que foi 
clicado. 
        -> condicionais! Provavel lista contendo os andares escolhidos, onde a ordem de evento é a mesma dos dados de entrada da lista
    - O usuário pode esperar que o elevador retorne ao primeiro andar quando não houver 
solicitações para processar. 
        -> Caso não haja entrada de dado (seleção de andar por usuário), condicional de retorno para 1º andar
        -> outra opção é determinar tempo sem uso do painel de controle. Se até determinado tempo não houver solicitação, enviar o elevador para o 1º andar


Questionamentos:
    - 

Definições:
    - nos andares 2º e 3º será necessario que o botão do andar seja pra subir ou descer
    - no 4º andar o botão deve ser apenas para descer

    - construir sequencia de andares

    - quando elevador chegar no andar, remover o indice 0 da lista de floors com slice
*/

import { useEffect, useState } from "react";
import {
  StyledBuilding,
  StyledControlPanel,
  StyledElevator,
  StyledElevatorShaft,
  StyledFloor,
  StyledMain,
  StyledUpButton,
} from "./style";

export const Elevator = () => {
  const [listFloors, setListFloors] = useState([]);
  const [currentFloor, setCurrentFloor] = useState(1);

  const handleChange = (event) => {
    setListFloors([...listFloors, event.target.value]);
  };


  useEffect(() => {
    for (let i = 0; i < listFloors.length; i++) {
      if (listFloors[i] === "1") {
        const elevatorElement = document.querySelector(".container_elevator");
        if (elevatorElement) {
          elevatorElement.style.bottom = "0px";
        }
      }
      if (listFloors[i] === "2") {
        const elevatorElement = document.querySelector(".container_elevator");
        if (elevatorElement) {
          elevatorElement.style.bottom = "150px";
        }
      }
      if (listFloors[i] === "3") {
        const elevatorElement = document.querySelector(".container_elevator");
        if (elevatorElement) {
          elevatorElement.style.bottom = "300px";
        }
      }
      if (listFloors[i] === "4") {
        const elevatorElement = document.querySelector(".container_elevator");
        if (elevatorElement) {
          elevatorElement.style.bottom = "450px";
        }
      }
    }
  }, [listFloors]);


  // botão
  //  -> se evento de click  = 1, renderiza a seta pra cima
  // -> se > 1, renderiza seta para cima e para baixo
  // -> se = 4, renderiza seta para baixo

  return (
    <>
      <h1>Elevator</h1>
      <StyledMain>
        <StyledBuilding>
          <StyledElevatorShaft>
            <StyledFloor>4º andar</StyledFloor>
            <StyledFloor>3º andar</StyledFloor>
            <StyledFloor>2º andar</StyledFloor>
            <StyledFloor>1º andar</StyledFloor>
            <div className="container_elevator">
              <StyledElevator className="elevator" />
              <StyledUpButton type="button"></StyledUpButton>
            </div>
          </StyledElevatorShaft>
        </StyledBuilding>
        <StyledControlPanel>
          <button type="button" value={"4"} onClick={handleChange}>
            4
          </button>
          <button type="button" value={"3"} onClick={handleChange}>
            3
          </button>
          <button type="button" value={"2"} onClick={handleChange}>
            2
          </button>
          <button type="button" value={"1"} onClick={handleChange}>
            1
          </button>
        </StyledControlPanel>
      </StyledMain>
    </>
  );
};
