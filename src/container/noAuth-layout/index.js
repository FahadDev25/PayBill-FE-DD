import React from "react";
import { Outlet } from "react-router-dom";

import { GetLoader } from "../../common/helper-components";
// images import

// import css files
// import "../../common/noauth-layout/css-imports";
import Header from "./Header";
import Footer from "./Footer";

const NoAuthLayout = () => {
  return (
    <>
      <div>
        {/* start preloader */}
        <GetLoader time={1000} />
        <Header />
        <Outlet />
        {/* Footer Area Start */}
        <Footer />
      </div>
    </>
  );
};

export default NoAuthLayout;
