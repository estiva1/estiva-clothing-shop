import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 80vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto 0;

  @media screen and (max-width: 800px) {
    min-width: 80vw;
  }
`;

export const EmptyMessage = styled.h2`
color: lightgray;
`

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;
