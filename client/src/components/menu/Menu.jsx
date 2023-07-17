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
      <div className="listMenus">
        {menus.map((menu) => {
          return (
            <Link to={menu.path} className="menuLink" key={menu.id}>
              <span className="menuIcon">{menu.icon}</span>
              <span className="menuName">{menu.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
