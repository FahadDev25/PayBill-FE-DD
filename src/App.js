import React from "react";
import { Routes, Route } from "react-router-dom";
import VerticalLayout from "./container/vertical-layout";
import { authProtectedRoutesList, publicRoutesList } from "./routes";

import { ProtectedRoute, PublicRoute } from "./routes/AuthRoute";
import "./App/assets/css/bootstrap.min.css";
import "./App/assets/css/bootstrap-datetimepicker.min.css";
import "./App/assets/plugins/fontawesome/css/fontawesome.min.css";
import "./App/assets/plugins/fontawesome/css/all.min.css";
import "./App/assets/css/style1.css";
import "./App.css";
import NoAuthLayout from "./container/noAuth-layout";
import { ToastContainer } from "react-toastify";

if (!localStorage.getItem("token")) {
  require("./common/noauth-layout/css-imports");
}

const App = () => {
  return (
    <>
      <Routes>
        {/* Protected Routest */}
        <Route element={<ProtectedRoute />}>
          <Route element={<VerticalLayout />}>
            {authProtectedRoutesList.map((e, i) => (
              <Route key={i} path={e.path} element={<e.element />} />
            ))}
          </Route>
        </Route>
        {/* Public Routest */}
        <Route element={<PublicRoute />}>
          <Route element={<NoAuthLayout />}>
            {publicRoutesList.map((e, i) => (
              <Route key={i} path={e.path} element={<e.element />} />
            ))}
          </Route>
        </Route>
      </Routes>
      <ToastContainer />;
    </>
  );
};

export default App;
