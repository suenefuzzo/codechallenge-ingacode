import { useState } from "react";
import { StyledMainPassword } from "./styles";

export const PasswordCreator = () => {
  const [lengthNumber, setLengthNumber] = useState(1);
  const [newPassword, setNewPassword] = useState([]);

  const passwordLength = (event) => {
    const capturedlength = event.target.value;
    setLengthNumber(capturedlength);
  };

  const passwordByLength = (event) => {
    event.preventDefault();

    let resultConstruction = []

    for (let i = 0; i < lengthNumber; i++) {
      const min = Math.ceil(0);
      const max = Math.floor(9);

      const result = Math.floor(Math.random() * (max - min + 1)) + min;

      console.log(result);
      resultConstruction.push(result)
    }

    setNewPassword(resultConstruction);
  };

  // construção da lógica
  // Será necessario construir uma funçãopara cada especificidade
  //    - primeiro caso: se apenas o tamanho da senha for definido sem nenhuma das opções -> retornar uma senha     apenas de número
  //    - colocar o numero recebido em um array?
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
            <input type="checkbox" name="capital_letters" />
            <label htmlFor="capitalletters">Insere letra maiúscula</label>
            <small>(A-Z)</small>
          </fieldset>
          <fieldset>
            <input type="checkbox" name="small_letters" />
            <label htmlFor="small_letters">Insere letra minúscula</label>
            <small>(a-z)</small>
          </fieldset>
          <fieldset>
            <input type="checkbox" name="numbers" />
            <label htmlFor="numbers">Insere um número</label>
            <small>(0-9)</small>
          </fieldset>
          <fieldset>
            <input type="checkbox" name="spacial_characters" />
            <label htmlFor="spacial_characters">Insere um símbolo</label>
            <small>(!@#$%&*...)</small>
          </fieldset>
          <button type="submit" className="generateButton" onClick={(e) => {
            e.preventDefault();
            passwordByLength(e)
          }}>
            Gerar senha
          </button>
          <div className="containerPassword">
            <span>{newPassword.join("")}</span>
            <button className="copyButton">Copiar senha</button>
          </div>
        </form>
      </div>
    </StyledMainPassword>
  );
};
