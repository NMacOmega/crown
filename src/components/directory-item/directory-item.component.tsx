import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
} from "./directory-item.styles";

import { DirectoryCategory } from "../directory/directory.component";

interface DirectoryItemProps {
  category: DirectoryCategory;
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => {
    navigate(route);
  };

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
