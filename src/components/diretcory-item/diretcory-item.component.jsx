import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
  TitltContainer,
} from "./diretcory-item.styles.js";

const DiretcoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <TitltContainer tiltReverse={true}>
        <BackgroundImage imageUrl={imageUrl} />
        <Body>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Body>
      </TitltContainer>
    </DirectoryItemContainer>
  );
};

export default DiretcoryItem;
