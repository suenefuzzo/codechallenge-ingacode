import { useEffect, useState } from "react";
import {
  StyledBuilding,
  StyledControlPanel,
  StyledDownButton,
  StyledElevator,
  StyledElevatorShaft,
  StyledFloor,
  StyledMain,
  StyledUpAndDownButton,
  StyledUpButton,
} from "./style";

export const Elevator = () => {
  const [listFloors, setListFloors] = useState([]);
  const [isMoving, setIsMoving] = useState(false);
  const [floor, setFloor] = useState("");

  const handleChange = (event) => {
    setListFloors([...listFloors, event.target.value]);
  };

  const handleFloorChange = (event) => {
    setFloor(event.target.value);
  };

  useEffect(() => {
    if (isMoving) {
      if (listFloors.length > 0) {
        const nextFloor = listFloors[0];
        const elevatorElement = document.querySelector(".container_elevator");

        if (elevatorElement) {
          if (nextFloor === "1") {
            elevatorElement.style.bottom = "0px";
          } else if (nextFloor === "2") {
            elevatorElement.style.bottom = "150px";
          } else if (nextFloor === "3") {
            elevatorElement.style.bottom = "300px";
          } else if (nextFloor === "4") {
            elevatorElement.style.bottom = "450px";
          }

          setTimeout(() => {
            const newList = listFloors.slice(1);
            setListFloors(newList);
          }, 4000);
        }
      } else {
        setIsMoving(false);
        setTimeout(() => {
          const elevatorElement = document.querySelector(".container_elevator");

          if (elevatorElement) {
            elevatorElement.style.bottom = "0px";
          }
        }, 5000);
      }
    }
  }, [isMoving, listFloors]);

  const startJourney = () => {
    if (!isMoving && listFloors.length > 0) {
      setIsMoving(true);
    }
  };

  useEffect(() => {
    const containerElevator = document.querySelector(".container_elevator");
    const elevatorBox = document.querySelector(".elevator");

    const callElevator = () => {
      if (floor === "1f") {
        containerElevator.style.bottom = "0px";
      } else if (floor === "2f") {
        containerElevator.style.bottom = "150px";
        elevatorBox.style.backgroundColor = "green";
      } else if (floor === "3f") {
        containerElevator.style.bottom = "300px";
        elevatorBox.style.backgroundColor = "green";
      } else if (floor === "4f") {
        containerElevator.style.bottom = "450px";
        elevatorBox.style.backgroundColor = "green";
      }
    };
    setTimeout(() => {
      const elevatorElement = document.querySelector(".container_elevator");
      const elevatorBox = document.querySelector(".elevator");

      if (floor !== "1f") {
        elevatorElement.style.bottom = "0px";
        elevatorBox.style.backgroundColor = "beige";
      }
    }, 5000);
    callElevator();
  }, [floor]);

  return (
    <>
      <StyledMain>
        <StyledBuilding>
          <StyledElevatorShaft>
            <StyledFloor>
              4º andar
              <StyledDownButton value={"4f"} onClick={handleFloorChange} />
            </StyledFloor>
            <StyledFloor>
              3º andar
              <StyledUpAndDownButton
                type="button"
                value={"3f"}
                onClick={handleFloorChange}
              />
            </StyledFloor>
            <StyledFloor>
              2º andar
              <StyledUpAndDownButton
                type="button"
                value={"2f"}
                onClick={handleFloorChange}
              />
            </StyledFloor>
            <StyledFloor>
              1º andar
              <StyledUpButton
                type="button"
                className="firstFloorButton"
                value={"1f"}
                onClick={handleFloorChange}
              />
            </StyledFloor>
            <div className="container_elevator">
              <StyledElevator className="elevator" />
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
          <button
            type="button"
            className="goButton"
            onClick={startJourney}
          ></button>
        </StyledControlPanel>
      </StyledMain>
    </>
  );
};
