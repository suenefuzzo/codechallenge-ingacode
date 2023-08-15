import { useState } from "react";
import {
  StyledConverterButton,
  StyledFormContainer,
  StyledMain,
} from "./style";
import { toast } from "react-toastify";

export const RomanNumeralConverter = () => {
  const [value, setValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setValue(inputValue);
  };

  const handleConvert = (event) => {
    event.preventDefault();
    const isValid = validateData(value);

    if (!isValid || value === "vv") {
      toast.warning("Insira um dado válido (caracter inválido)");
      setConvertedValue("");
      return
    }

    for (let i = 0; i < value.length; i++) {
      if (
        value[i] !== "i" &&
        value[i] !== "v" &&
        value[i] !== "x" &&
        value[i] !== "l" &&
        value[i] !== "c" &&
        value[i] !== "d" &&
        value[i] !== "m"
      ) {
        toast.warning("Insira um dado válido (caracter inválido)");
        setConvertedValue("");
      }
    }

    const validResult = convertData(value);
    setConvertedValue(validResult);
  };

  const validateData = (userData) => {
    const repeats = 3;
    let prevElement = "";
    let countRepeats = 0;

    for (let i = 0; i < userData.length; i++) {
      const currentElement = userData[i];

      if (currentElement === prevElement) {
        countRepeats += 1;
        if (countRepeats > repeats) {
          toast.warning("Esse dado não é válido");
          setConvertedValue("");
          return
        }
      } else {
        prevElement = currentElement;
        countRepeats = 1;
      }
    }

    return true;
  };

  const convertData = (validData) => {
    let listResult = [];

    const data = {
      i: 1,
      v: 5,
      x: 10,
      l: 50,
      c: 100,
      d: 500,
      m: 1000,
    };

    for (let i = 0; i < validData.length; i++) {
      if (data[validData[i]] < data[validData[i + 1]]) {
        listResult.push(data[validData[i + 1]] - data[validData[i]]);
        i++;
        continue;
      } else {
        listResult.push(data[validData[i]]);
      }
    }

    const result = listResult.reduce(
      (accumulator, current) => accumulator + current,
      0
    );

    return result;
  };


  const renderConvertedValue = () => {
    if (convertedValue !== "" && !isNaN(convertedValue)) {
      return <span>{convertedValue}</span>;
    }
    return null;
  };

  return (
    <StyledMain>
      <div className="container">
        <img src="/roman.png" alt="" />
        <StyledFormContainer>
          <form>
            <h1>Conversor de numeral romano</h1>
            <input
              type="text"
              value={value}
              onChange={handleChange}
              placeholder="Digite o número romano"
            />
            <StyledConverterButton onClick={handleConvert}>
              Converter
            </StyledConverterButton>
          </form>
          <div className="containerSpan">
            {renderConvertedValue()}
          </div>
        </StyledFormContainer>
      </div>
    </StyledMain>
  );
};
