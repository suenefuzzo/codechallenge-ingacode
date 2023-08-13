import { useState } from "react";
import { StyledMainPassword } from "./styles";
import CopyToClipboard from "react-copy-to-clipboard";

export const PasswordCreator = () => {
  const [lengthNumber, setLengthNumber] = useState(1);
  const [capitalLetter, setCapitalLetter] = useState(true);
  const [smallLetter, setsmallLetter] = useState(true);
  const [number, setNumber] = useState(true);
  const [specialCharacter, setSpecialCharacter] = useState(true);
  const [newPassword, setNewPassword] = useState("");
  const [, setCopy] = useState(false);

  const passwordLength = (event) => {
    const capturedlength = event.target.value;
    setLengthNumber(capturedlength);
  };

  const randomCapitalLetter = () => {
    const capLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = capLetters.charAt(
      Math.floor(Math.random() * capLetters.length)
    );

    return randomLetter;
  };

  const randomSmallLetter = () => {
    const smallLetters = "abcdefghijklmnopqrstuvwxyz";
    const randomLetter = smallLetters.charAt(
      Math.floor(Math.random() * smallLetters.length)
    );

    return randomLetter;
  };

  const randomNumber = () => {
    const min = Math.ceil(0);
    const max = Math.floor(9);
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber;
  };

  const randomCharacter = () => {
    const characters = "!#$%&'()*+,-./:;<=>?@{}";
    const randomCharacter = characters.charAt(
      Math.floor(Math.random() * characters.length)
    );

    return randomCharacter;
  };

  const generatePassword = () => {
    let newString = "";

    const allOptionsSelected =
      capitalLetter && smallLetter && number && specialCharacter;

    if (lengthNumber <= 3 && allOptionsSelected) {
      alert(
        "Sua senha precisa ter mais de 3 caracteres para inserir todos os opcionais"
      );
    } else {
      let count = 0;

      while (count < lengthNumber) {
        if (capitalLetter) {
          const getRandom = randomCapitalLetter();
          newString += getRandom;
          count++;
        }

        if (smallLetter) {
          const getRandom = randomSmallLetter();
          newString += getRandom;
          count++;
        }

        if (number) {
          const getRandom = randomNumber();
          newString += getRandom;
          count++;
        }

        if (specialCharacter) {
          const getRandom = randomCharacter();
          newString += getRandom;
          count++;
        }
      }
      newString = newString.slice(0, lengthNumber);

      setNewPassword(newString);
    }
  };

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
            <input
              type="checkbox"
              name="option"
              checked={capitalLetter}
              onChange={() => setCapitalLetter(!capitalLetter)}
            />
            <label htmlFor="capitalLetters">Insere letra maiúscula</label>
            <small>(A-Z)</small>
          </fieldset>

          <fieldset>
            <input
              type="checkbox"
              name="option"
              checked={smallLetter}
              onChange={() => setsmallLetter(!smallLetter)}
            />
            <label htmlFor="smallLetter">Insere letra minúscula</label>
            <small>(a-z)</small>
          </fieldset>

          <fieldset>
            <input
              type="checkbox"
              name="option"
              checked={number}
              onChange={() => setNumber(!number)}
            />
            <label htmlFor="number">Insere um número</label>
            <small>(0-9)</small>
          </fieldset>

          <fieldset>
            <input
              type="checkbox"
              name="option"
              checked={specialCharacter}
              onChange={() => setSpecialCharacter(!specialCharacter)}
            />
            <label htmlFor="specialCharacter">Insere um símbolo</label>
            <small>(!@#$%&*...)</small>
          </fieldset>

          <button
            type="submit"
            className="generateButton"
            onClick={(e) => {
              e.preventDefault();
              generatePassword(e);
            }}
          >
            Gerar senha
          </button>
          <div className="containerPassword">
            <span>{newPassword}</span>
            <CopyToClipboard text={newPassword} onCopy={() => setCopy(true)}>
              <button type="button" className="copyButton">
                Copiar senha
              </button>
            </CopyToClipboard>
          </div>
        </form>
      </div>
    </StyledMainPassword>
  );
};
