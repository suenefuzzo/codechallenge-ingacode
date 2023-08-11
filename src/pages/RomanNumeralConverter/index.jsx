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
      }else if (value === "vv"){
        return alert("Insira um dado válido (caracter inválido)")
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

    // verificar se o número subsequente é o mesmo que o anterior? para isso é preciso ter uma variavel que armazena o
    // elemento prévio para comparação, se sim indicar a soma

    // talvez dê para fazer três varificações 
      // -> se na expressão o maior número estiver a direita, deve-se subtrair
      // -> se na expressão o maior número estiver a esquerda, deve-se somar
      // deve ser feito mesmo por posição? ou se o primeiro elemento for menor que o segundo já posso considerar a subtração

    // será que devo criar uma string e ir dando push nos valores?


    for (let i = 0; i < validData.length; i++) {
      if (data[validData[i]] < data[validData[i+1]]){
        listResult.push(data[validData[i+1]] - data[validData[i]])
        i++
        continue
      }else {
        listResult.push(data[validData[i]])
      }
    }
    
    const sum = listResult.reduce((accumulator, current) => accumulator + current, 0)
    

    return sum;
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
