import { useState } from "react";
import { StyledMainPassword } from "./styles";

export const PasswordCreator = () => {
  const [lengthNumber, setLengthNumber] = useState(1);
  const [capitalLetter, setCapitalLetter] = useState(true)
  const [smallLetter, setsmallLetter] = useState(true)
  const [number, setNumber] = useState(true)
  const [specialCharacter, setSpecialCharacter] = useState(true)
  const [newPassword, setNewPassword] = useState([]);

  const passwordLength = (event) => {
    const capturedlength = event.target.value;
    setLengthNumber(capturedlength);
  };

  const passwordByLength = () => {
    let resultConstruction = []

    for (let i = 0; i < lengthNumber; i++) {
      const min = Math.ceil(0);
      const max = Math.floor(9);

      const result = Math.floor(Math.random() * (max - min + 1)) + min;

      resultConstruction.push(result)
    }

  const newPassword = resultConstruction.join("");
  setNewPassword(newPassword);
  };

  const handleChange = (data) => {
    if(data == "capitalLetter"){
        if(capitalLetter == true){
            console.log(data)
            // const result = randomCapitalLetter()
            // console.log(result)
            // return result
    
        }
        setCapitalLetter(!capitalLetter)
    }

    if(data == "smallLetter"){
        if(smallLetter == true){
            console.log(data)
        }
        setsmallLetter(!smallLetter)
    }

    if(data == "number"){
        if(number == true){
            console.log(data)
        }
        setNumber(!number)
    }

    if(data == "specialCharacter"){
        if(specialCharacter == true){
            console.log(data)
        }
        setSpecialCharacter(!specialCharacter)
    }
  }

  const randomCapitalLetter = () => {
    const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = capLetters.charAt(Math.floor(Math.random() * capLetters.length))

    return randomLetter
  }

  const randomSmallLetter = () => {
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const randomLetter = smallLetters.charAt(Math.floor(Math.random() * smallLetters.length))

    return randomLetter
  }

  const randomNumber = () => {
    const generateNumber = passwordByLength()
    return generateNumber
  }

  const randomCharacter = () => {
    const characters = "!#$%&'()*+,-./:;<=>?@{}"
    const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length))

    return randomCharacter
  }

  // construção da lógica
  // Será necessario construir uma funçãopara cada especificidade
  //    - primeiro caso: se apenas o tamanho da senha for definido sem nenhuma das opções -> retornar uma senha     apenas de número
  //    - como capturar dado de um input checkbox
  //    - para a lógica: buscar um método nativo que gere dados aleatorios, como letras, numeros e caracteres
  //    - para a lógica: dado certo tamanho de senha, seria ideal criar um ciclo de preenchimento de dados passando por todas as opções marcadas, até completar o numero fornecido!

  //    atenção, o retorno do dado final deve ser uma string

  return (
    <StyledMainPassword>
      <div className="container">
        <h1>Gerador de senha</h1>
        <form>
          <fieldset className="containerRange">
            <div className="containerLength">
              <p>Tamanho da senha</p>
              <span>{lengthNumber}</span>
            </div>
            <input
              type="range"
              min={1}
              max={100}
              step={1}
              value={lengthNumber}
              onChange={passwordLength}
              className="inputRange"
            />
          </fieldset>

          <fieldset>
            <input type="checkbox" name="option" value={capitalLetter} onChange={() => handleChange("capitalLetter")}/>
            <label htmlFor="capitalLetters">Insere letra maiúscula</label>
            <small>(A-Z)</small>
          </fieldset>

          <fieldset>
            <input type="checkbox" name="option" value={smallLetter} onChange={() => handleChange("smallLetter")}/>
            <label htmlFor="smallLetter">Insere letra minúscula</label>
            <small>(a-z)</small>
          </fieldset>

          <fieldset>
            <input type="checkbox" name="option" value={number} onChange={() => handleChange("number")}/>
            <label htmlFor="number">Insere um número</label>
            <small>(0-9)</small>
          </fieldset>

          <fieldset>
            <input type="checkbox" name="option" value={specialCharacter} onChange={() => handleChange("specialCharacter")}/>
            <label htmlFor="specialCharacter">Insere um símbolo</label>
            <small>(!@#$%&*...)</small>
          </fieldset>

          <button type="submit" className="generateButton" onClick={(e) => {
            e.preventDefault();
            passwordByLength(e)
          }}>
            Gerar senha
          </button>
          <div className="containerPassword">
            <span>{newPassword}</span>
            <button className="copyButton">Copiar senha</button>
          </div>
        </form>
      </div>
    </StyledMainPassword>
  );
};
