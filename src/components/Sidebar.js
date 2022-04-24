import React, { useContext, useEffect, useState } from "react";
import { toggleAllPlugin } from "../api";
import { DataGuardContext } from "../context/Context";
import Navigation from "./Navigation";
import ToggleSwitch from "./ToggleSwitch";

const Sidebar = () => {
  // eslint-disable-next-line
  const [state, dispatch] = useContext(DataGuardContext);
  const [pluginStatus, setPluginStatus] = useState("");

  useEffect(() => {
    if (state.data !== null) {
      // assume all plugins are inactive if tab1 active.isEmpty
      if (state.data.tabdata.tab1.active.length === 0)
        setPluginStatus("inactive");
      else setPluginStatus("active");
    }
  }, [state]);

  const handleToggleStatus = async (status) => {
    setPluginStatus(status);
    await toggleAllPlugin(status)
      .then((response) => response.json())
      .then((response) =>
        dispatch({ type: "GET_ALL_DATA", payload: response })
      );
  };

  return (
    <div className="sidebar">
      <div className="sidebar__main">
        <span className="sidebar__title">
          Data<span className="sidebar__title-bold">Guard</span>
        </span>
        <Navigation />
      </div>

      <div className="sidebar__footer">
        <p>All plugins enabled</p>
        <ToggleSwitch
          handleToggle={(e) => {
            handleToggleStatus(e.target.checked ? "inactive" : "active");
          }}
          status={pluginStatus}
        />
      </div>
    </div>
  );
};

export default Sidebar;
