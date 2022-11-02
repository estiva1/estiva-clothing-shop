import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemContainer,
  TextContainer,
  TiltContainer,
} from "./diretcory-item.styles.js";

const DiretcoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <TiltContainer
        tiltReverse={true}
        glareEnable={true}
        glareMaxOpacity={0.45}
        transitionSpeed={4000}
        perspective={800}
      >
        <BackgroundImage imageUrl={imageUrl} />
        <TextContainer>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </TextContainer>
      </TiltContainer>
    </DirectoryItemContainer>
  );
};

export default DiretcoryItem;
