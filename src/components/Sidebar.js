import React, { useState } from "react";
import { toggleAllPlugin } from "../api";
import Navigation from "./Navigation";
import ToggleSwitch from "./ToggleSwitch";

const Sidebar = () => {
  const [pluginStatus, setPluginStatus] = useState("active");

  const handleToggleStatus = async (status) => {
    setPluginStatus(status);
    await toggleAllPlugin(status).then((response) => response.json()).then((response) => console.log({response}));
  };

  return (
    <div className="sidebar">
      <div className="sidebar__main">
        <h3 className="sidebar__title">DataGuard</h3>
        <Navigation />
      </div>

      <div className="sidebar__footer">
        <p>All plugins enabled</p>
        <ToggleSwitch
          handleToggle={(e) =>
            handleToggleStatus(e.target.checked ? "inactive" : "active")
          }
          status={pluginStatus}
        />
      </div>
    </div>
  );
};

export default Sidebar;
