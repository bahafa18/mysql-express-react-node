import { Link } from "react-router-dom";
import "./menu.scss";
import { menus } from "../../data";

const Menu = () => {
  return (
    <div className="menu">
      <div className="logo">
        <img src="" alt="" />
        <span>bahafa</span>
      </div>
      <div className="menu">
        {menus.map((item) => (
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map((listItem) => (
              <Link to={listItem.path} className="listItem" key={listItem.id}>
                <span>{listItem.icon}</span>
                <span className="listItemTitle">{listItem.title}</span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
