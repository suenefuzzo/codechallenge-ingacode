import { styled } from "styled-components";

export const StyledMainPassword = styled.main`
  background-image: url("/art.jpg");
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100% !important;

  .container {
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    padding: 2rem;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      color: #343a40;
      font-size: 2rem;
      font-weight: 400;
    }

    form {
      color: #343a40;

      fieldset {
        margin-top: 8px;
      }

      fieldset > small {
        margin-left: 8px;
      }

      small {
        color: #495057;
        font-size: 0.625rem;
      }

      .containerRange {
        .inputRange {
          width: 100%;
          height: 8px;
          outline: none;
          background: white;
          border-radius: 25px;
          box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.2);
        }
      }

      .containerLength {
        display: flex;
        justify-content: space-between;
        align-items: center;

        span {
          border: 1px solid #adb5bd;
          width: 50px;
          background-color: #e9ecef;
          border-radius: 4px;
          color: #495057;
          padding: 2px;
          padding-left: 4px;
        }
      }

      .generateButton {
        width: 100%;
        height: 30px;
        padding: 7px;
        border-radius: 4px;
        border: none;
        font-size: 14px;
        margin-top: 10px;
        background-color: #8591cd;
        color: #f8f9fa;
        cursor: pointer;
      }
      .generateButton:hover {
        font-family: 500;
        background-color: #f8f9fa;
        color: #8591cd;
        border: 1px solid #adb5bd;
      }

      .containerPassword {
        display: flex;
        flex-direction: column;
        gap: 4px;

        span {
          width: 100%;
          height: 30px;
          border: 2px solid #adb5bd;
          background-color: #e9ecef;
          border-radius: 4px;
          color: #495057;
          margin-top: 15px;
        }

        .copyButton {
        width: 100%;
        height: 30px;
        padding: 7px;
        border-radius: 4px;
        border: none;
        font-size: 14px;
        background-color: #8591cd;
        color: #f8f9fa;
        cursor: pointer;
        }
        .copyButton:hover {
        font-family: 500;
        background-color: #f8f9fa;
        color: #8591cd;
        border: 1px solid #adb5bd;
      }
      }
    }
  }

  @media (max-width: 768px) {
    .container {
      width: 25rem;
    }
  }

  @media (max-width: 1024px) {
    .container {
      width: 31.25rem;
    }
  }
`;
