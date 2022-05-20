import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin: 10px 0;
  }

  @media screen and (max-width: 800px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    button {
      width: 100%;
      min-height: 50px;
      margin: 10px auto;
    }
  }
`;
