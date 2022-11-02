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

export const TextContainer = styled.div`
  height: 100px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition: opacity 2s cubic-bezier(0.445, 0.055, 0.55, 0.95);

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const TiltContainer = styled(Tilt)`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid white;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.3);
  &:hover {
    border: 1px solid black;
    box-shadow: 8px 8px rgb(47 29 24 / 0.5), -8px -8px rgb(110 127 128 / 0.5);
    transition: border 2s cubic-bezier(0.25, 0.45, 0.45, 0.95),
      box-shadow 2s cubic-bezier(0.25, 0.45, 0.45, 0.95);
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
      transform: scale(1.15);
    }
    ${TextContainer} {
      opacity: 0.9;
    }
  }
`;
