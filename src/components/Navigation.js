import NavItem from "./NavItem";
import { SiMarketo } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { RiTodoLine } from "react-icons/ri";

const list = [
  { id: 1, path: "marketing", title: "Marketing", icon: <SiMarketo /> },
  { id: 2, path: "finance", title: "Finance", icon: <GiReceiveMoney /> },
  { id: 3, path: "personnel", title: "Personnel", icon: <RiTodoLine /> },
];
const Navigation = () => {
  return (
    <div className="sidebar__navigation">
      {list.map((item) => {
        return (
          <NavItem
            path={item.title.toLowerCase()}
            title={item.title}
            icon={item.icon}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Navigation;
