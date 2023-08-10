import { useState } from "react";
import { StyledMain } from "./style";

/*
- capturar o valor do input
- converte para minúsculo
- apresentar erro para dados inválidos
- criar objeto associando valor a letra
- criar função para calcular resultado
  -> comparar o valor das letras e criar condicional:
    -> se o maior valor estiver a direita o calculo será de subtração
    -> se o maior valor estiver a esquerda o calculo será de soma
    -> e os elementos forem iguais, também será feita a soma

atenção: um elemento não se repete mais de 3 vezes em sequencia
*/

export const RomanNumeralConverter = () => {
  const [value, setValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("")

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setValue(inputValue);

  };

  const handleConvert = (event) => {
    event.preventDefault();
    const isValid = validateData(value);

    if (!isValid) {
      return alert("Esse dado não é válido (repetição)");
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
        return alert("Insira um dado válido (caracter inválido)");
      }
    }

    const validResult = convertData(value);
    setConvertedValue(validResult)

  }

  const validateData = (userData) => {
    const repeats = 3;
    let prevElement = "";
    let countRepeats = 0;

    for (let i = 0; i < userData.length; i++) {
      const currentElement = userData[i];

      if (currentElement === prevElement) {
        countRepeats += 1;
        if (countRepeats > repeats) {
          return alert("Esse dado não é válido");
        }
      } else {
        prevElement = currentElement;
        countRepeats = 1;
      }
    }

    return true;
  };

  const convertData = (validData) => {
    let result = 0;

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
      if (Object.keys(data).includes(validData[i])) {
        result = result + data[validData[i]];
      }
    }

    return result;
  };


  return (
    <StyledMain>
      <h1>Roman Numeral</h1>
      <form>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Digite o número romano"
        />
        <button onClick={handleConvert}>Converter</button>
      </form>
      <div className="container__span">
        Resultado: <span className="result">{convertedValue}</span>
      </div>
    </StyledMain>
  );
};
