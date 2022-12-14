import styled from "styled-components";

import { BaseButton } from "../button/button.styles";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 320px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 9;

  ${BaseButton} {
    margin-top: 10px;
  }
`;

export const EmptyCartMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  
  flex-direction: column;
  overflow: auto;
`;
