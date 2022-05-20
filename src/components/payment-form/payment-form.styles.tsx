import styled from "styled-components";

import Button from "../button/button.component";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 550px) {
    width: 95%;
  }
`;

export const FormContainer = styled.form`
  width: 100%;
  @media screen and (min-width: 550px) {
    min-width: 500px;
    height: 100px;
  }
`;

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
  @media screen and (max-width: 550px) {
    margin: 30px auto;
  }
`;
