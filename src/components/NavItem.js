import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const NavItem = ({path, title, icon}) => {
    const {pathname} = useLocation();
  return (
    <Link to={path} className={`sidebar__navigation-item ${pathname.includes(path) && 'sidebar__navigation-active'}`}>
      {icon}
      <p > {title} </p>
    </Link>
  );
};

export default NavItem;
