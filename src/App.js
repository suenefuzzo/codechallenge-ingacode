import { styled } from "styled-components";

export const StyledMain = styled.main`
  background: -webkit-linear-gradient(to right, #f29492, #114357);
  background: linear-gradient(to right, #f29492, #114357);

  height: 100vh;
  width: 100vw;

  background-attachment: fixed;
  background-size: cover;
  align-items: center;
  justify-content: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
