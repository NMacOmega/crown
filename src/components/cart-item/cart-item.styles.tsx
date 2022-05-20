import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  @media screen and (max-width: 550px) {
    height: 400px;
    img {
      width: 40%;
    }
    align-items: center;
    justify-content: center;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  @media screen and (max-width: 550px) {
    width: 40%;
  }
`;

export const Price = styled.span`
  font-size: 16px;
`;
