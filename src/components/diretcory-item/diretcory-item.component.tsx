import { FC, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {
  BackgroundImage,
  DirectoryItemContainer,
  TextContainer,
  TiltContainer,
} from "./diretcory-item.styles";

import { DirectoryCategory } from "../directory/directory.component";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DiretcoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = useCallback(() => {
    navigate(route);
  }, [navigate]);

  return (
    <TiltContainer
      tiltReverse={true}
      glareEnable={true}
      glareMaxOpacity={0.45}
      transitionSpeed={4000}
      perspective={900}
    >
      <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        <TextContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </TextContainer>
      </DirectoryItemContainer>
    </TiltContainer>
  );
};

export default DiretcoryItem;
