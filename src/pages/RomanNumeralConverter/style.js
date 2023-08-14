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
  }

  .container img {
    overflow: hidden;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    align-self: center;
  }

  .containerSpan {
    min-width: 100px;
  }

  .result {
    border: 2px solid red;
    /* border-color: ; */
    min-width: 100px;
  }
`;
