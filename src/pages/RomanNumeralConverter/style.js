import { styled } from "styled-components";

export const StyledMain = styled.main`
  background-image: url("/texture.jpg");
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background-color: white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 275px;
    height: 450px;
    position: relative;
  }

  .container img {
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    align-self: center;
    height: 150px;
    position: absolute;
    top: 55px;
  }

  .containerSpan {
    min-width: 100px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #d1d1d1;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    height: 30px;
  }

  .result {
    border: 2px solid red;
    min-width: 100px;
  }
`;

export const StyledFormContainer = styled.div`
  position: absolute;
  width: 270px;
  bottom: 40px;
  right: -50px;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
  box-shadow: -10px 5px 31px 0px #dee2df;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;

    input {
      background-color: #f8f9fa;
      border-radius: 4px;
      border: none;
      padding: 8px;

      &:focus {
        outline: none;
      }

      ::placeholder {
        color: #999;
      }
    }
  }

  h1 {
    font-size: 1.5rem;
  }
`;

export const StyledConverterButton = styled.button`
  padding: 10px 20px;
  border: none;
  background: linear-gradient(135deg, #3498db, #9b59b6);
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #2980b9, #8e44ad);
  }
`;
