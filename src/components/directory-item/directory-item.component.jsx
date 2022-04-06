import { Link, Outlet } from "react-router-dom";
import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;

  return (
    <DirectoryItemContainer key={id}>
      {/* <Link to={`shop/${title}`}> */}
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>shop Now</p>
      </DirectoryItemBody>
      {/* </Link> */}
      {/* <Outlet /> */}
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
