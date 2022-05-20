import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 900px;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 85vw;
    flex-direction: column;
  }
`;
