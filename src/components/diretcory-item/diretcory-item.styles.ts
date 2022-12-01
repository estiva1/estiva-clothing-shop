import styled from "styled-components";
import Tilt from "react-parallax-tilt";

type BackgroundImageProps = {
  imageUrl: string;
};

export const BackgroundImage = styled.div<BackgroundImageProps>`
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

export const DirectoryItemContainer = styled.div`
  display: flex;
  flex: 1 1 auto;
  width: 30%;
  height: 240px;
  margin: 0px 7.5px 15px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid white;
  box-shadow: 0 3px 16px rgb(0 0 0 / 0.3);
  transition: all 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    transform: scale(0.92);
    box-shadow: 0 3px 24px rgb(0 0 0 / 0.9), 8px 8px rgb(47 29 24 / 0.5), -8px -8px rgb(110 127 128 / 0.5);
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.15);
    }
    ${TextContainer} {
      opacity: 0.9;
    }
  }
`;

export const TiltContainer = styled(Tilt)`
  display: flex;
  flex: 1 1 auto;
  width: 30%;
  height: 240px;
  margin-bottom: 15px;
  transition: opacity 1s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;
