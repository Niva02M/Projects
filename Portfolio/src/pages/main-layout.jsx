import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/layout/header";
import Social from "../components/layout/social";

const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-black flex flex-col">
      <Header />
      <Social />
      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
