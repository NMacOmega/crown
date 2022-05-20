import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: grid;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  grid-template-rows: auto;

  grid-template-columns:
    [c1s] 20%
    [c1e c2s] 20%
    [c2e c3s] 20%
    [c3e c4s] 20%
    [c4e c5e] 5%;
  grid-column-gap: 3%;

  grid-template-areas: "image description quantity price remove";
  @media screen and (max-width: 550px) {

    grid-template-rows: 
      [r1s] 50%;
      [r1e r2s] 50%;

  grid-template-areas: 
    "image description description price remove"
    "image blank quantity quantity quantity";

  }
`;

export const ImageContainer = styled.div`
  grid-area: image;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 550px) {
  }
`;

export const BaseSpan = styled.span`
  display: flex;
`;

export const DescriptionSpan = styled.span`
  grid-area: description;
`;

export const Quantity = styled(BaseSpan)`
  grid-area: quantity;
`;

export const Arrow = styled.div`
  cursor: pointer;

  @media screen and (max-width: 550px) {
    background-color: hsla(0, 0%, 75%, 0.75);
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40%;
  }
`;

export const Value = styled.span`
  margin: 0 10px;
  @media screen and (max-width: 550px) {
    margin: 0 30px;
  }
`;

export const PriceSpan = styled.span`
  grid-area: price;
  display: flex;
  padding-left: 5%;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  grid-area: remove;
  display: flex;
  justify-content: flex-end;
`;
