import { styled } from "styled-components";

export const StyledCard = styled.div`
  height: 350px;
  max-width: 400px;
  border-radius: 8px;
  /* background-color: red; */
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.05);
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
`;
