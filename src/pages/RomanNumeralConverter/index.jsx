import { useState } from "react";
import { StyledMain } from "./style";

/*
- capturar o valor do input
- converte para minúsculo
- apresentar erro para dados inválidos
- criar objeto associando valor a letra
- criar função para calcular resultado
  -> 

atenção: um elemento não se repete mais de 3 vezes em sequencia
*/

export const RomanNumeralConverter = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const isValid = validateData(inputValue)

    if (!isValid){
      return alert("Esse dado não é válido (repetição)")
    }

    for (let i = 0; i < inputValue.length; i++) {
      if (
        inputValue[i] !== "i" &&
        inputValue[i] !== "v" &&
        inputValue[i] !== "x" &&
        inputValue[i] !== "l" &&
        inputValue[i] !== "c" &&
        inputValue[i] !== "d" &&
        inputValue[i] !== "m"
      ) {
        return alert("Insira um dado válido (caracter inválido)");
      } 
    }

    setValue(inputValue);
  };

  const validateData = (userData) => {
    const repeats = 3;
    let prevElement = "";
    let countRepeats = 0;

    for (let i = 0; i < userData.length; i++){
      const current = userData[i]

      if (current === prevElement){
        countRepeats += 1;
        if (countRepeats > repeats){
          return alert ("Esse dado não é válido")
        }
      } else {
        prevElement = current;
        countRepeats = 1
      }
    }

    return true
  };



  // const data = {
  //   "i": 1,
  //   "v": 5,
  //   "x": 10,
  //   "l": 50,
  //   "c": 100,
  //   "d": 500,
  //   "m": 1000,
  // };



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
        <button>Converter</button>
      </form>
      <div className="container__span">
        Resultado: <span className="result">{value}</span>
      </div>
    </StyledMain>
  );
};
