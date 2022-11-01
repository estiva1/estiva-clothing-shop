import styled from "styled-components";
import Tilt from "react-parallax-tilt";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  transition: transform 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition: opacity 1s cubic-bezier(0.445, 0.055, 0.55, 0.95);

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
  y p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  margin: 0 7.5px 15px;
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
    }
    ${Body} {
      opacity: 0.9;
    }
  }
`;

export const TitltContainer = styled(Tilt)`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  overflow: hidden;
`;
