import { styled } from "styled-components";

export const StyledMain = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledBuilding = styled.div`
  background-color: blue;
  height: 600px;
  width: 300px;
  display: flex;
  justify-content: center;
`;

export const StyledElevatorShaft = styled.div`
  background-color: gray;
  height: 100%;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .container_elevator {
    position: absolute;
    bottom: 0;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const StyledFloor = styled.div`
  height: 150px;
  width: 300px;
  width: 100%;
  border-top: 1px dotted black;
`;

export const StyledElevator = styled.div`
  height: 80px;
  width: 100px;
  background-color: beige;
`;

export const StyledUpButton = styled.button`
    background-image: url("/caret-up-solid.svg");
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid black;
    height: 20px;
    cursor: pointer;
`
export const StyledControlPanel = styled.div`
    background-color: brown;
    height: 145px;
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    gap: 8px;

    button{
        width: 20px;
        border-radius: 100%;
        border: none;
        cursor: pointer;
    }
`