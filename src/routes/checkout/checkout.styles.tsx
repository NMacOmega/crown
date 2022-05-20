import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  @media screen and (max-width: 800px) {
    width: 85%;
    margin: 10vw auto;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  @media screen and (max-width: 800px) {
    padding: 20px 22px 20px 0;
    justify-content: space-around;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }
  @media screen and (max-width: 800px) {
    width: unset;
    font-size: 15px;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
