import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

const Page = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout__page">
        <Outlet />
      </div>
    </div>
  );
};

export default Page;
