import styled from "styled-components";

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
content: " ";
display: inline-block;
width: 64px;
height: 64px;
margin: 8px;
border-radius: 50%;
border: 6px solid #38352D;
border-color: #38352D transparent #38352D transparent;
animation: spinner .8s cubic-bezier(0.445, 0.055, 0.55, 0.95) infinite;
}
@keyframes spinner {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
`;
