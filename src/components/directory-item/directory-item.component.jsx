import { Link, Outlet } from "react-router-dom";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { id, title, imageUrl } = category;

  return (
    <div key={id} className="directory-item-container">
      {/* <Link to={`shop/${title}`}> */}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="directory-item-body">
        <h2>{title}</h2>
        <p>shop Now</p>
      </div>
      {/* </Link> */}
      {/* <Outlet /> */}
    </div>
  );
};

export default DirectoryItem;
