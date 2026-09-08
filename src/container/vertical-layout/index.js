import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const VerticalLayout = () => {
  const [SlideNav, setSlideNav] = useState(false);
  return (
    <div>
      <div className={SlideNav ? "main-wrapper slide-nav" : "main-wrapper"}>
        <Header setSlideNav={setSlideNav} SlideNav={SlideNav} />
        <Sidebar />
      </div>
      {/*children components append*/}
      <Outlet />
      {/*<Footer />*/}
    </div>
  );
};

export default VerticalLayout;
