import React from "react";
import { GiThirdEye } from "react-icons/gi";
import "../assets/styles/switch.scss";

const ToggleSwitch = ({ handleToggle, status }) => {
  return (
    <div>
      <label className="switch">
        <input disabled={status === "disabled" && status} type="checkbox" onChange={handleToggle} value={status}  />
        <span className={`switch__slider switch__slider-round ${status === "active" ? "switch__slider-active" : ""}`}></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
