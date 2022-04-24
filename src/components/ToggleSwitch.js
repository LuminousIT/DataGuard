import React from "react";
import "../assets/styles/switch.scss";

const ToggleSwitch = ({ handleToggle, status }) => {
  return (
    <div>
      <label className="switch">
        <input
          disabled={status === "disabled"}
          type="checkbox"
          value={status}
          onChange={handleToggle}
        />
        <span
          className={`switch__slider switch__slider-round ${
            status === "active" ? "switch__slider-active" : ""
          }`}
        ></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
