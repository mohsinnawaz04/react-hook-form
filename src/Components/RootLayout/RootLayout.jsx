import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function RootLayout() {
  return (
    <div className="h-screen w-full bg-slate-700">
      <Navbar
        firstAnchor="/"
        secondAnchor="/user/login"
        thirdAnchor="/user/create-account"
        fourthAnchor=""
      />
      <Outlet />
    </div>
  );
}

export default RootLayout;
